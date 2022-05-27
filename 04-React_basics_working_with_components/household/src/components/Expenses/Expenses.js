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
  const [filteredYear, setFilteredYear] = useState('2021');
  // const [filterItems, setFilterItems] = useState(props.items);

  // setFilterItems((prevState) => {
  //   return { ...prevState, sex: 'sex' };
  // });

  // console.log(aa);
  // console.log(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  //* And we can store JSX content like this in variables.
  //* 해당 방법으로 JSX를 덜 복잡하게 만들 수 있다.
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }

  // useEffect(() => {
  //   const newItems = props.items.filter(
  //     (expense) => expense.date.getFullYear() === Number(filteredYear)
  //   );
  //   setFilterItems(newItems);
  // }, [filteredYear, props.items]);

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
        {/* //? Simple dynamic expression을 활용 */}
        {expensesContent}

        {/* //? && 연산자를 활용한 Conditional Content
        {filteredExpenses.length === 0 && expensesContent}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* //? 3항 연산자를 활용한 Conditional Content */}
        {/* //* unique id가 없으면 map의 index argument를 사용해서 넣어도 된다. key는 number, string에 관게 없이 모두 사용가능하다.
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // 'key' is not a prop we are using instead of ExpenseItem
              // But instead it's a prop you can add to any component no matter if it's a custom component by you
              // You should always add such a key when mapping out lists of items.
              key={expense.id} //* key 값을 넣지않으면 overwritten. 버그가 발생한다.
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;

///////////////////////////
// Understanding "Keys"  //
///////////////////////////

// Well React has a special concept when it comes to rendering lists of data.
// A concept which exists to ensure that React is able to update and render such lists efficiently.
// without performance losses, or bugs, which may occur.
// And I wanna show you which problem we have
