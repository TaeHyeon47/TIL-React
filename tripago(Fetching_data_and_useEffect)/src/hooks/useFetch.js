import { useState, useEffect } from 'react';

// 아래와 같은 방식으로 export하면 {}가 필요하다.
export const useFetch = (url) => {
  // 데이터를 받아와서 생성하기 전에 null 값이 return된다.
  // 받아주는 컴포넌트의 배열 메소드 앞에 &&연산자로 추가 로직을 넣어줘야한다.
  const [data, setData] = useState(null);

  useEffect(() => {
    // useEffect에 바로 async를 사용할 수는 없지만 아래와 같이 function을 새로 만들어서 사용할 수 있다.
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  // 커스텀 훅에서는 일반적으로 State와 비슷하게 Array로 반환한다.
  // 또는 아래와 같이 object로 반환한다.
  return { data };
};

// export default useFetch;
