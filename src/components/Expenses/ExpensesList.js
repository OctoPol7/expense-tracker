import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    // let showExpenses = <p>No Expenses Found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenes-list__fallback">Found no expenses.</h2>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) =>
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />)}
    </ul>
  );
};

export default ExpensesList;