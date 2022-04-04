import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const onCancelClickHandler = () => {

    props.onDisplayExpenseForm(false);
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title:enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    }

    props.onSaveSaveExpenseData(expenseData)

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');


    console.log(expenseData.amount) ;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls"></div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />

        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={amountChangeHandler} />

        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}

          value={enteredDate}
        />

        <div className=".new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="submit" onClick={onCancelClickHandler}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
