import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectedYearHandler = yr => {
    setSelectedYear(yr);
  };

  const filteredExpenses = expenses.filter(expense => {
    return (
      expense.date.getFullYear().toString() === selectedYear ||
      selectedYear === "All"
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectedYearHandler} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
