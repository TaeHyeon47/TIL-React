import './App.css';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

///////////////////////////////////////////////////////////
///// The Concept of "Composition" ("children props") /////
///////////////////////////////////////////////////////////

// In App.js we're using Expenses, in there we are using ExpenseItem, in there we're using ExpenseDate.
// Generally, this approach of building a user interface from smaller building blocks is called composition.

// Sometimes however, you wanna have a component where you don't configure everything through props
// but where instead you're able to pass content between the opening and closing tags of that component.

// 리엑트에서 컴포넌트 함수를 Arrow로 사용할 수 있다. 차이점은 없으며 오직 자신의 선호에만 달려있다.
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // 예전에는 아래와 같은 방식을 사용하여, React를 항상 import를 해주어야했음.
  // This here would be the alternative to this JSX code using React object.
  // CreateElement takes three arguments.
  // The first argument is the element which should be created.
  // The second argument is an object that configures this element. Specifically, an object which sets all the attributes
  // The third argument now is the content between the opening and closing div tags. You can now have an infinitely long list of arguments,
  // And when you use JSX, it's near this method which is called.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    //* 이유는 모르겠으나 push, unshift 메소드로 값을 추가하면 리엑트가 리이벨루에이션 되지 않는다.
    //* push, unshift 메소드로 값을 넣고 다른 방법으로 리이벨루에이션을 시키면 값이 정상적으로 나오긴한다.
    setExpenses((prevExpenses) => {
      // const ggg = [newExpense, ...prevExpenses];
      // prevExpenses.push(newExpense);
      // console.log('!!!!!!!!!!!!!!!!!!');
      // console.log('...', ggg);
      // console.log('push', prevExpenses);

      return [expense, ...prevExpenses]; // We can use the spread operator not just on objects but also on arrays.
    });
    // [newExpense, ...prevExpenses];
    // expenses.push(newExpense);
    // setExpense1(newExpense);
    // console.log(expenses);
  };

  // 옛날 방식의 React.createElement를 보면 왜 return할때 1개의 요소로 감싸야하는지 알수 있다
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

/// 퀴즈 ////
// Which kind of code do you write when using React.js?
// Declarative JavaScript Code

// What does "declarative" mean?
// You define the desired outcome (e.g a target UI) and let the library(React) figure out the steps.

// What is a "React Component"?
// It's a JavaScript function which typically returns HTML(JSX) code that should be displayed.

// Which statement is correct?
// With React, you build a component tree with one root component that's mounted into a DOM node.

// What does "component tree" mean?
// It means that you have a root node which then has more components nested beneath it.

// How do you pass data between components?
// Via "custom HTML attributes" (better known as "props")

// How can you output dynamic data in React components (i.e. in the returned JSX code)?
// You can use single curly braces (opening & closing) with any JS expression between them.
