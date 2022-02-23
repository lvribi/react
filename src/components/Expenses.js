import ExpenseItem from './ExpenseItem';
import Card from './Card';
import MyComponent from './MyComponent';
import './Expenses.css';

const Expenses = (props) => {
const num = 1;
return (
<div><Card className="expenses">
      <ExpenseItem expense={props.expenseData[0]}></ExpenseItem>
      <ExpenseItem expense={props.expenseData[1]}></ExpenseItem>
      <ExpenseItem expense={props.expenseData[2]}></ExpenseItem>
      <ExpenseItem expense={props.expenseData[3]}></ExpenseItem>
</Card>
<MyComponent num={num}></MyComponent>
</div>
)
}

export default Expenses; 