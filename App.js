import React, { useState } from 'react';
import QuoteForm from './QuoteForm';
import QuoteList from './QuoteList';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);

  // Corectează numele funcției de la addQueto la addQuote
  const addQuote = (quote) => {
    setQuotes([...quotes, quote]);
  };

  return (
    <div className="App">
      <h1>Quote Manager</h1>
      <QuoteForm addQuote={addQuote} />
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;
