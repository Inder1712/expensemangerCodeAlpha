import React from "react";

const Expense = ({ id, description, amount, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="mb-4 p-4 bg-gray-200 rounded-md flex justify-between items-center">
      <div>
        <p className="font-semibold">{description}</p>
        <p>${amount}</p>
      </div>
      <button
        onClick={handleDelete}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Expense;
