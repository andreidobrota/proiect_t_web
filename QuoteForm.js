import React, { useState } from 'react';

function QuoteForm({ addQuote }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddQuote = () => {
    if (amount && description) {
      addQuote({ amount, description });
      setAmount('');
      setDescription('');
    } else {
      alert('Please enter both amount and description.');
    }
  };

  return (
    <div className="queto-form">
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button onClick={handleAddQuote}>Add Queto</button>
    </div>
  );
}

export default QuoteForm;
