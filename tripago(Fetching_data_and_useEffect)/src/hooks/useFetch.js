import { useState, useEffect } from 'react';

// 아래와 같은 방식으로 export하면 import할 때 {}가 필요하다.
export const useFetch = (url) => {
  // 데이터를 받아와서 생성하기 전에 null 값이 return된다.
  // 따라서 받아서 사용하는 컴포넌트의 배열 메소드 앞에는 항상 && 연산자로 추가 로직을 넣어야한다..
  const [data, setData] = useState(null);
  // 로딩 State
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // useEffect에 바로 async를 사용할 수는 없지만 아래와 같이 function에는 사용할 수 있다.
    const fetchData = async () => {
      setIsPending(true);

      try {
        // fetch 메소드는 2번째에 argument를 object{} 형태로 옵션으로 넣을 수 있다.
        // 여기에 header나 request method인 get과 post를 명시할 수 있다.
        // 아래의 signal은 abort controller를 넣는 것이고 최종적으로 clean up function안에서 fetch가 abort된다.
        // signal: controller를 통해 구체적인 타입의 에러를 던진다.
        // 던진 에러는 catch 블록에서 잡는다.
        const res = await fetch(url, { signal: controller.signal });
        console.log(res);
        if (!res.ok) {
          // throw new Error구문이 실행되면, 아래의 catch문에서 res.statusText를 err 값으로 전달 받게되고
          // catch 블록이 실행되게 된다. 최종적으로 err.message는 res.statusText 값이 된다.
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setData(json);
        //이전에 에러가 발생했을 경우 error 값이 남아있을 수 있다. 성공 시에는 항상 초기화해주자.
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          setIsPending(false);
          // 아래는 사용자의 커스텀 Error 메세지이다.
          setError('Could not fetch the data');
          // err은 catch에서 자동생성된 에러이다. 다른 이름으로 사용 가능하다.
          console.log(err.message);
        }
      }
    };

    fetchData();

    // cleanup function안에는 asynchronous task, subscriptions, some kind of data stream을 abort 할 수 있다.
    return () => {
      controller.abort();
    };
  }, [url]);

  // 커스텀 훅에서는 일반적으로 State와 비슷하게 Array로 반환한다.
  // 또는 아래와 같이 object로 반환한다.
  return { data, isPending, error };
};

// export default useFetch;
