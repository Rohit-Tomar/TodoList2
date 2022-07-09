import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddNewExpenseButton from "./components/Expenses/AddNewExpenseButton";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 100.34,
    date: new Date(2020, 2, 1),
  },
  { id: "e2", title: "Car Loan", amount: 200.34, date: new Date(2021, 3, 2) },
  {
    id: "e3",
    title: "Car Washing",
    amount: 300.34,
    date: new Date(2022, 4, 3),
  },
  {
    id: "e4",
    title: "Car Repair",
    amount: 400.34,
    date: new Date(2021, 5, 4),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [addNewExpense, setAddNewExpense] = useState(0);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      {addNewExpense === 0 && (
        <AddNewExpenseButton setAddNewExpense={setAddNewExpense} />
      )}
      {addNewExpense === 1 && (
        <NewExpense
          onAddExpense={addExpenseHandler}
          setAddNewExpense={setAddNewExpense}
        />
      )}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
