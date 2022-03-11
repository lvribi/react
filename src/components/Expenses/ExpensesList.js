import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import './ExpensesList.css';
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2 className='expenses-list__fallback'>no data found</h2>
      </div>
    );
  }
  return (
    <ul className='expenses-list'>
      {props.items.map((myExpense) => (
        <ExpenseItem key={myExpense.id} expense={myExpense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
