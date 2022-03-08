import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
    const saveExpenseDataHandler =(expenseFormData) =>{
        const expenseDate = {
            ...expenseFormData,
            id:Math.random()
        };
    
    
        props.onAddExpense(expenseDate);
        
    };
    return (
    <div>
      <div className="new-expense">
        <ExpenseForm onSaveSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
};

export default NewExpense;
