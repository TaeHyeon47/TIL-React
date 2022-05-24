import './App.css';
import Expenses from './components/Expenses';

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

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
