import React, { useState } from 'react';
import Card from '../UI/Card'; // 자바스크립트 파일은 '.js'를 붙이지 않아도 된다.
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  // 처음 input에 값이 없기 때문에 State의 초기값은 ''으로 입력된다.
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // Trim will remove any excess white space.
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return; // 리턴되면서 addUserHandler의 코드는 실행되지 않는다. (return statements finished the function execution.)
    }
    // enteredAge가 String이지만, JS에서 일반적으로 숫자로 비교가 가능하다. 하지만, 형변환을 하는 것이 더 안전하기 때문에 +를 붙이는 것이 좋다.
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    // Null is treated as a falsy value,
    setError(null);
  };

  return (
    // Wrapper has no other meaning than fulfilling this JSX requirement with my wrapper.
    <Wrapper>
      {/* if error would be undefined well nothing would be rendered here for this line. */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* 
         'htmlfor' : the prop name for assigning that for attribute to a label.
          that they understand which label belongs to which input.
          htmlfor과 id를 username으로 연결 
      */}
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddUser;
