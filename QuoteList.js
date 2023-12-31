import React from 'react';

function QuoteList({ quotes }) {
  return (
    <div className="Quote-list">
      <h2>Quote List</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{`${quote.description}: $${quote.amount}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteList;
