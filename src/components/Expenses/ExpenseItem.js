import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';


const ExpenseItem = (props) => {
  

  //const [myTitle,setTtile] = useState(props.expense.title)
const [title,setTtile] = useState(props.expense.title)
  
  const onClickHandler = () => {

    setTtile("bbbbbbb");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.expense.amount} $</div>
      </div>
      <button onClick={onClickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
