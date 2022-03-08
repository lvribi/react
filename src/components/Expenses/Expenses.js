import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import MyComponent from "../MyComponent";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
const Expenses = (props) => {
  const [myDataRetrived, setDateRetrived] = useState("");

  const onEnteredDataHandler = (dataFromParent) => {
    setDateRetrived(dataFromParent);
  };

  const num = 1;
  return (
    <div>
      <ExpensesFilter onEnteredData={onEnteredDataHandler} />
      <Card className="expenses">
        <h1>yeaaaaaaaaaaaaaaaaaaah : {myDataRetrived}</h1>
        <ExpenseItem expense={props.expenseData[0]}></ExpenseItem>
        <ExpenseItem expense={props.expenseData[1]}></ExpenseItem>
        <ExpenseItem expense={props.expenseData[2]}></ExpenseItem>
        <ExpenseItem expense={props.expenseData[3]}></ExpenseItem>
      </Card>
      <MyComponent num={num}></MyComponent>
    </div>
  );
};

export default Expenses;
