import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectedYearHandler = yr => {
    setSelectedYear(yr);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectedYearHandler} />
      {expenses.map((expense, i) => {
        if (
          expense.date.getFullYear() == selectedYear ||
          selectedYear == "All"
        ) {
          return (
            <ExpenseItem
              key={i}
              title={expenses[i].title}
              amount={expenses[i].amount}
              date={expenses[i].date}
            />
          );
        }
      })}
    </Card>
  );
};

export default Expenses;
