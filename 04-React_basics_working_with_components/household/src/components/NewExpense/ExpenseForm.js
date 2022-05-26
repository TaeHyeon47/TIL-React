import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // useState에 초기값은 ''으로 String으로 저장한다.
  // onChage의 event.target.value 값이 항상 String으로 저장되기 때문이다.
  // Amount number가 들어가는 곳도 String으로 만들었다.
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // useState에 {}(object)를 사용하여, 그룹으로 만들어 줄 수 있다. 프로퍼티처럼 :을 사용하여 값을 입력한다.
  // the logic is kind of the same but now it's in one state object managed as one piece of state
  // instead of three separate slices. The difference is that whenever you update this state
  // you need to update all three properties and not just one.
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  console.log({ ...userInput });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);

    // State를 객체형태로 사용하기 위해서는 항상 ...으로 전체 객체를 풀어줘야한다.
    setUserInput({
      ...userInput, // takes an object pulls out all the key value pairs and adds them to this new object.
      enteredTitle: event.target.value, // override "enteredTitle" key value pairs
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

    // whenever you update state and you depend on the previous state,
    // but also if you would be managing a counter which you increment by one, for example,
    // whenever you update your state and you depend on the previous state,
    // you should not do it like this but you should use an alternative form
    // of this state updating function. Instead of calling it like this,

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // you should call it and pass in a function to that function.
    // So you call the setUserInput function and you pass a function to it,
    // And it will receive the previous state snapshot
    // and now here, we should return the new state snapshot.
    // In many cases, both will work fine, but keep in mind that I mentioned
    // that Reacts schedules state updates, it doesn't perform them instantly.
    // And therefore, theoretically, if you schedule a lot of state updates at the same time,
    // you could be depending on an outdated or incorrect state snapshot
    // if you use this approach (...userInput을 사용한 접근법).
    // ㅑn this inner function will always be the latest state snapshot,
    // keeping all scheduled state updates in mind. So this is the safer way
    // to ensure that you always operate on the latest state snapshot.

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });

    // In many cases, both will work fine, but keep in mind that I mentioned
    // that Reacts schedules state updates, it doesn't perform them instantly.
    // And therefore, theoretically, if you schedule a lot of state updates at the same time,
    // you could be depending on an outdated or incorrect state snapshot
    // if you use this approach (...userInput을 사용한 접근법).
  };

  const DateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);

    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 페이지 넘어가는 것을 방지. 바닐라 자바스크립트.
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    // props로 child에서 parent component으로 값을 전달할 수 있다.
    props.onSaveExpenseData(expenseData);

    console.log(expenseData);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  return (
    // 데이터 제출은 버튼 요소에다가 onClick을 넣는 것이 아니라, form에 onSubmit을 넣어야 한다.
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          {/* 
          오프닝, 클로징 태그에 아무런 요소가 없기에 input은 셀프 클로징으로 가능하다. onChange는 모든 키 입력에 반응하는 Event이다.
          We can now implement something which is called two-way binding, which simply means
          that for inputs we don't just listen to changes, but we can also pass a new value back into the input.
          So that we can reset or change the input programmatically. And how do we do that? Well, it's very simple.
           All we have to do is add the value attribute which is a default attribute, to this input element.
          "value" will set the internal value property which every input element has.
          And we can set it to a new value. so that when we change the state, we also change input.

          */}
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          {/* 'min' and 'step' are just default HTML attributes for input elements */}
          <input
            type='number'
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            value={userInput.enteredDate}
            onChange={DateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
