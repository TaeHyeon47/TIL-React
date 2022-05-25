import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form action=''>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          {/* 오프닝, 클로징 태그에 아무런 요소가 없기에 input은 셀프 클로징으로 가능하다. */}
          <input type='text' />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          {/* 'min' and 'step' are just default HTML attributes for input elements */}
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
