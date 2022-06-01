import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

//? Side Effects 정의
//? HTTP Request나 LocalStorage 등 리엑트 이외의 모든 일을 가리키는 말이다.

//? useEffect의 사용 이유
//? HTTP Request를 단순히 State와 사용한다면 무한 반복 루프가 생긴다.
//? 왜냐하면 컴포넌트 function이 다시 랜더링될때 request를 보내면서 state를 변경하게 된다.
//? state를 변경하니 다시 컴포넌트 function이 실행되어 다시 request를 요청하고..........
//* 이런것들을 방지하기 위해 나온 것이 바로 useEffect 훅이다.

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //* useEffect 랜더링 순서
  // 1. useEffect를 제외한 다른 요소들이 먼저 랜더링된다.
  // 2. useEffect의 Function이 실행된다.
  // 3. setIsLoggedIn으로 인해 State 값이 변경되며 다시한번 랜더링된다.
  // 4. 다시 랜더링될 때는 Dependencies가 변경되지 않는 이상 useEffect의 function은 실행되지 않는다. (최초 1회만 자동 실행)
  // (다시 말해서 Dependencies가 없으면 최초 1회만 실행된다는 것이다.)
  useEffect(() => {
    const storedUserInformation = localStorage.getItem('isLoggedIn'); // return the items stored localStorage.
    // useEffect가 없으면 무한 루프를 생성한다.
    if (storedUserInformation === '1') {
      setIsLoggedIn(true); // setIsLoggedIn이 무한 랜더링 된다.
    }
  }, []);

  const loginHandler = (email, password) => {
    // localStorage
    // 첫번째 argument : Key(identifier) (항상 String으로 사용)
    // 두번째 argument : Value(store) (항상 String으로 사용, 숫자가 아닌 다른걸로 사용해도 됨.. 다만 로그인이 되었는지 안되었는지 구분이 되어야함)
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
