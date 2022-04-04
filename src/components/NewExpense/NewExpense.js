import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [displayExpenseForm,setDisplayExpenseForm] = useState(false);

    const cancelButtonClickedHandler = (display) => {
        setDisplayExpenseForm(display)
        console.log(displayExpenseForm);
    }
    const onAddNEWExpenseClicked = () => {
        setDisplayExpenseForm(true);
    }


    const saveExpenseDataHandler =(expenseFormData) =>{
        const expenseDate = {
            ...expenseFormData,
            id:Math.random()
        };
    
    
        props.onAddExpense(expenseDate);
        
    };

        if (displayExpenseForm == true)
        {
            return ( <div>
                <div className="new-expense">
                    <ExpenseForm onSaveSaveExpenseData={saveExpenseDataHandler} onDisplayExpenseForm={cancelButtonClickedHandler} />
                </div>
            </div> )

        }
        else
            return (
                <div className="new-expense">
                <div><button type="submit" onClick={onAddNEWExpenseClicked}>Add NEW Expense</button></div>
                </div>
            )


};

export default NewExpense;
