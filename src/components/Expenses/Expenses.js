import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;




// import React, { useState } from "react";
// import Card from "../UI/Card";
// import "./Expenses.css";
// import ExpensesChart from "./ExpensesChart";
// import ExpensesFilter from "./ExpensesFilter";
// import ExpensesList from "./ExpensesList";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2022");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <li>
//       <div>
//         <Card className="expenses">
//           <ExpensesFilter
//             selected={filteredYear}
//             onChangeFilter={filterChangeHandler}
//           />
//           <ExpensesChart expenses={filteredExpenses}/>
//           <ExpensesList items={filteredExpenses} />
//         </Card>
//       </div>
//     </li>
//   );
// };

// export default Expenses;






         // another way of adding filter

// {filteredExpenses.length === 0 ? (
//   <p> No Expenses Found !!!</p>
// ) : (
//   filteredExpenses.map((expense) => (
//     <ExpenseItem
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))
// )}
