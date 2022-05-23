import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
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
  ]);

  const addExpenseHandler = expense => {
    // console.log("In App");
    // console.log(expense);
    const newExpenses = [...expenses, expense];
    console.log(newExpenses);
    setExpenses(newExpenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
