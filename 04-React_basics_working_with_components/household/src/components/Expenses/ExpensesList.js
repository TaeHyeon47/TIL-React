import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

//* 아래와 같이 if문을 사용하여 2개 중 1개만 return하는 형식으로 컴포넌트를 만들 수 있다.
//* 이는 3항 연산자를 사용하는 것보다 훨씬 깔끔하게 화면을 분기처리할 수 있다.
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    //* ul을 사용하는 것은 시맨틱, 검색 최적화를 위해 사용한다.
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
