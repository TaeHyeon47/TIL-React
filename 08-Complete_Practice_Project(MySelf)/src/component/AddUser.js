import React, { useState } from 'react';
import './AddUser.css';
import Card from './UI/Card';
import Button from './UI/Button';
import UserList from './UserList';
import ErrorModal from './UI/ErrorModal';

const AddUser = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [emptyError, setEmptyError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
    //  setUserAge((prevState) => {
    //    return { ...prevState, enteredUserAge: +event.target.value };
    //  });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName === '' || userAge === '') {
      setEmptyError('유요한 이름과 나이를 입력해주세요');
      setIsInvalid(true);
      return;
    } else if (userAge < 0) {
      setAgeError('나이는 0보다 커야합니다.');
      setIsInvalid(true);
      return;
    }

    const userInfo = {
      id: Math.random().toString(),
      enteredUserName: userName,
      enteredUserAge: +userAge,
    };
    console.log('In addUserHandler', userInfo);
    setUserInfo((prevState) => {
      return [...prevState, userInfo];
    });

    setUserName('');
    setUserAge('');
  };

  const modalOffHandler = () => {
    setIsInvalid(false);
    setEmptyError('');
    setAgeError('');
  };

  return (
    <div>
      {!isInvalid ? (
        ''
      ) : (
        <ErrorModal
          emptyError={emptyError}
          ageError={ageError}
          modalOff={modalOffHandler}
        />
      )}
      <Card className='input'>
        <form onSubmit={addUserHandler}>
          <label>이름</label>
          <input
            type='text'
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label>나이</label>
          <input
            type='number'
            value={userAge || ''}
            onChange={userAgeChangeHandler}
            step='1'
          />
          <Button type='submit'>추가</Button>
        </form>
      </Card>
      {userInfo.length > 0 ? <UserList userinfo={userInfo} /> : ''}
    </div>
  );
};

export default AddUser;
