import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import MyComponent from "../MyComponent";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onEnteredDataHandler = (dataFromParent) => {
    setFilteredYear(dataFromParent);
  };

  let dataToBeFiltred = props.expenseData.filter(
    x => {return x.date.getFullYear().toString() === filteredYear}
  );

  const num = 1;

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onEnteredData={onEnteredDataHandler} />
      <Card className="expenses">
        {dataToBeFiltred.map((myExpense) => (
          <ExpenseItem key={myExpense.id} expense={myExpense} />
        ))}
      </Card>
      <MyComponent num={num}></MyComponent>
    </div>
  );
};

export default Expenses;
