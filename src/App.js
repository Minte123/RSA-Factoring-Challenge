import React, { useState } from "react";
import "./App.css";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const INITIOAL_EXENSES = [
  {
    id: "e1",
    title: "Mobile Screen",
    amount: 4800,
    date: new Date(),
  },
  {
    id: "e2",
    title: "Earphone",
    amount: 150,
    date: new Date(),
  },
  {
    id: "e3",
    title: "Traouser",
    amount: 800,
    date: new Date(),
  },
  {
    id: "e4",
    title: "Book",
    amount: 300,
    date: new Date(),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIOAL_EXENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(addExpenseHandler);
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
