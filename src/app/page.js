"use client";
import React, { useState } from "react";
import Expense from "./components/expense";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (!description || !amount) return;
    setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
    setDescription("");
    setAmount("");
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense, index) => index !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddExpense();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center text-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-6">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            className="block w-full px-4 py-2 border rounded-md"
            placeholder="Description"
          />
        </div>
        <div className="mb-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyPress={handleKeyPress}
            className="block w-full px-4 py-2 border rounded-md"
            placeholder="Amount in Rupess"
          />
        </div>
        <button
          onClick={handleAddExpense}
          className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Expense
        </button>
        <div className="mt-8">
          {expenses.map((expense, index) => (
            <Expense
              key={index}
              id={index}
              description={expense.description}
              amount={expense.amount}
              onDelete={handleDeleteExpense}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
