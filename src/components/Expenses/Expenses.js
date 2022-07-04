import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart.js';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('');
  
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  });

  return (
    <Card className="expenses__card">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && (
        <p style={{ color: "white", textAlign: "center" }}>No Expenses Found</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
    </Card>
  );
}

export default Expenses;
