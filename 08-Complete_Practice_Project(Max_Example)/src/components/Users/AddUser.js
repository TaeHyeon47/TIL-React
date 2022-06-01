//? Ref allow us to get access to other DOM elements
import React, { useState, useRef } from 'react';
import Card from '../UI/Card'; // 자바스크립트 파일은 '.js'를 붙이지 않아도 된다.
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  // Ref takes a default value you wanna initialize it to (default값은 undefined)
  // we can let React know that we wanna connect a ref to a HTML element by going to that element
  // to which we wanna connect the ref and adding a special prop there, the ref prop.
  // Just like the key prop, that's a built-in prop which you can add to any HTML element
  //? you can connect any HTML element to one of your references.
  //? You will very often do that for inputs because you wanna fetch input data, for example,
  //? but you can do with any element.
  //? The Ref value always is an object which always has a current prop
  //? Ref는 항상 current prop을 가지는 객체를 가지고 있다.
  //? The current prop holds the actual value that ref is connected with.
  //! 단순히 value를 read할 때는 Ref를 사용하는 것이 좋다. State방식은 많은 키로거를 발생시킨다.
  //! Ref는 조금 더 작은 코드를 발생시키지만 Dom을 직접조작하는 부분이 많이 발생한다면 좋지 않다.

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // 처음 input에 값이 없기 때문에 State의 초기값은 ''으로 입력된다.
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredname = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // Trim will remove any excess white space.
    if (enteredname.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return; // 리턴되면서 addUserHandler의 코드는 실행되지 않는다. (return statements finished the function execution.)
    }
    // enteredAge가 String이지만, JS에서 일반적으로 숫자로 비교가 가능하다. 하지만, 형변환을 하는 것이 더 안전하기 때문에 +를 붙이는 것이 좋다.
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredname, enteredUserAge);

    // Rarely use refs to manipulate the DOM.
    //? 아래와 같은 방식은 Ref가 Dom을 직접 조작하기 때문에 아주 가끔 사용해야한다.
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

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
      <Card className={classes.input}>
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
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
