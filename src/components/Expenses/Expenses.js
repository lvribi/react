import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import MyComponent from "../MyComponent";

import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
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
            

      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onEnteredData={onEnteredDataHandler} />
        {/*dataToBeFiltred.length<=0 ? <p>No data found </p> : dataToBeFiltred.map((myExpense) => (<ExpenseItem key={myExpense.id} expense={myExpense} />))*/}
       {<ExpensesList items={dataToBeFiltred}/>}
      </Card>
      <MyComponent num={num}></MyComponent>
    </div>
  );
};

export default Expenses;
