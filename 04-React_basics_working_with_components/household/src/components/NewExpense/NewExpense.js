import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // parent에서 child로 보내는 것이 아닌, child에서 parent로 값을 전달하는 방법
  // a function which will eventually be triggered when something happens inside of this component.
  // onSaveExpenseDataHandler function defined in the NewExpense component
  // which we will now execute in a different component.
  // even though it's not defined inside of ExpenseForm because we are passing a pointer edit
  // through the onSaveExpenseData prop.

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
