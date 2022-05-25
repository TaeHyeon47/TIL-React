// 매우 중요!!!!!!
// A Component in React is just a JavaScript function.
// A special kind of function special regarding what it returns
// that it does return this JSX code, but other than that,
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
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
  // 리엑트에서도 일반적인 자바스크립트 변수를 선언해서 사용할 수도 있긴 있다.
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = 'Car Insurance';
  //   const expenseAmount = 294.67;

  // React에서는 아래와 같은 방식으로 작동하지 않는다. 컴포넌트는 결국 Function이다. JSX를 리턴하는 특별한 Function이다.
  // Function이기 때문에 someone has to call it, and you might notice that we never called our component functions,
  // instead we just used these functions On Expenses.js like HTML elements in JSX code.
  // Under the hood this is almost like a function call.
  // By using our components in JSX code, we make React aware of our component functions.
  // And these component functions stand to return JSX code, which is all the evaluated,
  // up until there's no more JSX code to be evaluated.
  // So react keeps on calling any component functions it encounters in JSX,
  // in their JSX code until there are no more functions left.
  // The only problem with that is that react never repeats that.
  // React goes through all of that when the application is initially rendered.
  // 위으 사항 때문에 State 같은 상태관리가 나왔다.

  // let title = props.title;
  // const clickHandler = () => {
  //   title = 'Updated!';
  //   console.log(title);
  // };

  const clickHandler = () => {
    title = 'Updated!';
    console.log(title);
  };

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

    // // I'm setting a class named prop and actually at the moment, this won't do anything.
    // But I'm not setting a children prop.

    // between the opening and closing tags of your custom component.
    // This content between the opening and closing card tag. That is what will be available on props children inside of that card.

    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* 
      In React, we add an event listener by going to the JSX element, like this button. 
      And there we add a special prop. But now it's not a prop which sets some value
      for this button, but instead it's a prop which starts with on.
      Because React exposes all these default events as props which start with on.
      All these event handler props, want a function as a value, a function passed as a value for onClick
      which then is executed when that event occurs.
      we can create an anonymous arrow function like this. "onClick={() => {console.log('Clicked!')}}"
      */}
      {/* 
      onClick에 들어가는 함수에 ()을 넣어서 실행시키면, JSX코드가 Return될때 같이 파싱이되면서 함수가 실행되지 않는다.
      And that's important, by the way, we just point at it. We don't execute() it here.
      You don't add parentheses here.
      Because if you would add parentheses here, 
      JavaScript would execute this when this line of code is being parsed. when the JSX code is returned.
      So it's then not executing clickHandler when the click occurs but when this JSX code is evaluated,
      and that would be too early.
      That's why instead we just point at the clickHandler. We pass a pointer at this function as a value to onClick,
      */}
      {/* 
      To all these built-in HTML elements, we can add supported event listeners basically.
      on입력하고 자동완성으로 나오는 이벤트를 모두 사용하면 된다.
      */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
