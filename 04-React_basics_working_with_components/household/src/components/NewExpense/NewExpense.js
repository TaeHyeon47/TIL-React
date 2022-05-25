import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
      <form action=''></form>
    </div>
  );
};

export default NewExpense;
