import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {/* 
      HTML elements와 다르게 custom component는 대문자로 시작한다. 
      Lowercase elements are built in HTML elements. 
      Whereas elements starting with an uppercase character are elements defined by you or some other developer.
      */}
      {/* using this single-curly-brace syntax. we can also use it for assigning values to attributes. */}

      {/* we at least have some style duplication, also maybe some HTML structure duplication. */}
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
