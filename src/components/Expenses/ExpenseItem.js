import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   console.log("update " + title);
  //   setTitle('Updated');
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;