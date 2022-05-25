import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // useState에 초기값은 ''으로 String으로 저장한다.
  // onChage의 event.target.value 값이 항상 String으로 저장되기 때문이다.
  // Amount number가 들어가는 곳도 String으로 만들었다.
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // useState에 {}(object)를 사용하여, 그룹으로 만들어 줄 수 있다. 프로퍼티처럼 :을 사용하여 값을 입력한다.
  // the logic is kind of the same but now it's in one state object managed as one piece of state
  // instead of three separate slices. The difference is that whenever you update this state
  // you need to update all three properties and not just one.
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  console.log({ ...userInput });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);

    // State를 객체형태로 사용하기 위해서는 항상 ...으로 전체 객체를 풀어줘야한다.
    setUserInput({
      ...userInput, // takes an object pulls out all the key value pairs and adds them to this new object.
      enteredTitle: event.target.value, // override "enteredTitle" key value pairs
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const DateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);

    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form action=''>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          {/* 오프닝, 클로징 태그에 아무런 요소가 없기에 input은 셀프 클로징으로 가능하다. onChange는 모든 키 입력에 반응하는 Event이다. */}
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          {/* 'min' and 'step' are just default HTML attributes for input elements */}
          <input
            type='number'
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            onChange={DateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
