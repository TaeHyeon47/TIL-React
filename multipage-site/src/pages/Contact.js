import React from 'react';
//? useLocation을 브라우저 path의 queryString을 가져온다.
import { useLocation } from 'react-router-dom';

export default function Contact() {
  // useLocation을 브라우저의 current location에 대한 많은 정보를 가져온다.
  // search는 queryparameter이다. (queryparameter는 url의 ?뒤에 오는 모든것이다.)
  const queryString = useLocation().search;
  console.log(queryString);

  // URLSearchParams는 queryparams object를 생성한다.
  // 해당 object는 특정한 파라미터를 가져오는 getMethod 가지고 있다.
  const queryParams = new URLSearchParams(queryString);

  //? "?name=mario"의 name 파라미터를 아래에 가져온다.
  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur at
        natus, praesentium similique molestias voluptatum atque doloremque?
        Culpa reprehenderit accusamus dolorum recusandae veritatis quidem
        obcaecati, quas eligendi, eveniet dolore vel?
      </p>
    </div>
  );
}
