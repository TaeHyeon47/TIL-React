import { useState } from 'react';
// 훅은 다른방식으로 export가 권장된다. 해당 방식으로 진행하면 아래와 같이 {}을 넣어줘야한다.
import { useFetch } from '../hooks/useFetch';
import './TripList.css';

const TripList = () => {
  //   const [trips, setTrips] = useState([]);

  // setUrl을 통해 API Endpoint를 변경할 수 있다.
  const [url, setUrl] = useState('http://localhost:3000/trips');
  // 디스트럭쳐링한 데이터를 trips이라고 변경해서 사용한다.
  const { data: trips, isPending, error } = useFetch(url);

  //   const fetchTrips = useCallback(async () => {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setTrips(json);
  //   }, [url]);

  // useEffect안에는 async를 사용할 수 없다.
  // url State를 통해 API Endpoint가 변경될때마다 useEffect가 실행된다.
  //   useEffect(() => {
  //     fetchTrips();
  //   }, [fetchTrips]);

  return (
    <div className='trip-list'>
      <h2>TripList</h2>
      {isPending && <div>Loading rips....</div>}
      {error && <div>{error}</div>}
      <ul>
        {/* 커스텀 훅의 초기값이 null이기 때문에 "trips &&" 연산을 추가해주어야 한다. */}
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <h3>{trip.price}</h3>
            </li>
          ))}
      </ul>
      <div className='filters'>
        {/*
            //? API EndPoint에서 원하는 정보만 가져오는 법
            1. ?을 붙이면 query를 생성한다.
            2. property key(name)을 입력한다. 
            3. '=' 부호를 입력 후 value 값을 입력한다.
        */}
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;

//? 프로미스 개념 복습
// A promise does is give us a placeholder value that will be fulfilled at some point in time.
// I promise to give you a value once I've finished this task.
