import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses';

///////////////////////////////////////////////////////////
///// The Concept of "Composition" ("children props") /////
///////////////////////////////////////////////////////////

// In App.js we're using Expenses, in there we are using ExpenseItem, in there we're using ExpenseDate.
// Generally, this approach of building a user interface from smaller building blocks is called composition.

// Sometimes however, you wanna have a component where you don't configure everything through props
// but where instead you're able to pass content between the opening and closing tags of that component.

function App() {
  // const expenses = [
  //   { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  //   { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  // ];

  const expenses = [
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

  // 옛날 방식의 React.createElement를 보면 왜 return할때 1개의 요소로 감싸야하는지 알수 있다
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
