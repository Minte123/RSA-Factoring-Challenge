import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";




const ExpensesList =  props => {

  if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">No Expenses Found !!!</h2>
    
  }

return <ul className="expenses-list">
 {props.items.map((expense) => (
      <ExpenseItem
        // key:{dataPoint.label}
        id =  {Math.random() *10}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))};
</ul>

}



export default ExpensesList;
