import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className='expenses'>
      {/* 
      HTML elements와 다르게 custom component는 대문자로 시작한다. 
      Lowercase elements are built in HTML elements. 
      Whereas elements starting with an uppercase character are elements defined by you or some other developer.
      */}
      {/* using this single-curly-brace syntax. we can also use it for assigning values to attributes. */}

      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
};

export default Expenses;
