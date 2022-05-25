import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // useState에 초기값은 ''으로 String으로 저장한다.
  // onChage의 event.target.value 값이 항상 String으로 저장되기 때문이다.
  // Amount number가 들어가는 곳도 String으로 만들었다.
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
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
            onChange={titleChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            onChange={titleChangeHandler}
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