import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

//////////////////////////////////////////////////////////////////////////////
// Controlled vs Uncontrolled Components & Stateless vs Stateful Components //
//////////////////////////////////////////////////////////////////////////////
// Expenses 컴포넌트가 결국 ExpensesFilter 컴포넌트를 컨트롤한다.
// ExpensesFilter는 단순히 값을 받아서 보여주는 것이 끝이다. Stateless한 이런 상태를 called presentational or dumb component라 부른다.
// 리엑트 프로젝트를 진행하면 presentational, dumb component를 더 많이 가지게 된다.

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(props.items);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 
          HTML elements와 다르게 custom component는 대문자로 시작한다. 
          Lowercase elements are built in HTML elements. 
          Whereas elements starting with an uppercase character are elements defined by you or some other developer.
        */}
        {/* JSX에서 {}을 사용하면 java expresstion을 사용할 수 있게된다. */}
        {/* we at least have some style duplication, also maybe some HTML structure duplication. */}
        {/* 
          Under the hood this is almost like a function call.
          We make react aware of the Expenseitem function.
          By using our components in JSX code, we make React aware of our component functions.
          And whenever react evaluates this JSX code, it will call these component functions.
        */}
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {[<Card />, <Card />]}
      </Card>
    </div>
  );
};

export default Expenses;
