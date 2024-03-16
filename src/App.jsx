import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ExpenseSection from "./components/ExpenseSection";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Delete Transaction
  const deleteTransaction = (id) => {
    // setTransactions(transactions.filter((item) => item.id !== id));

    setTransactions(
      transactions.filter((item) => {
        if (item.id !== id) {
          return true;
        }
      })
    );
  };

  // Save transaction
  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      // amount: parseInt(amount),
      amount: +amount,
    };

    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <MainSection
          transactions={transactions}
          saveTransaction={saveTransaction}
        />
        <ExpenseSection transactions={transactions} />
        <ListGroup
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </>
  );
};

export default App;
