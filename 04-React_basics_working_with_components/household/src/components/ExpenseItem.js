// 매우 중요!!!!!!
// A Component in React is just a JavaScript function.
// A special kind of function special regarding what it returns
// that it does return this JSX code, but other than that,

import React from 'react';
import './ExpenseItem.css';

// Props simply stands for properties.
// We can set properties of our own custom components.
// 상위 컴포넌트에서 넣어준 Props는 parameter로 받아줄 수 있다.
// 자바스크립트 함수처럼 파라미터를 쓰지만 (title, amount, date)와 같이 여러개를 사용하지 않는다.
// React는 오로지 1개의 파라미터만 사용한다.
// React will ensure that we get one parameter in every component which we use as a component.
////// And that one parameter will be an object which holds all the received attributes as properties ///////
// you can name this parameter whatever you want. But, typically, it's named props
// we get key-value pairs in this props object here which is passed in by React automatically.
// The keys will be the attribute names defined here(title={expenses[0].title에 앞에붙은 title이 attribute임, {}안에 들어가는 것이 value임})
const ExpenseItem = (props) => {
  // 일반적인 자바스크립트 변수를 선언해서 사용할 수도 있긴 있다.
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = 'Car Insurance';
  //   const expenseAmount = 294.67;

  return (
    //  <div className='expense-item'>
    //    {/* date는 expenseDate만 사용하면 오류가 난다. */}
    //    <div>{expenseDate.toISOString()}</div>
    //    <div className='expense-item__description'>
    //      {/*
    //       inside of these JSX code snippets.
    //       You can replace hard coded data with opening and closing curly braces. {}
    //       you can run basic JavaScript expressions.
    //       */}
    //      {/* <h2>{Math.random()}</h2> */}

    //      <h2>{expenseTitle}</h2>
    //      <div className='expense-item__price'>${expenseAmount}</div>
    //    </div>
    //  </div>

    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
