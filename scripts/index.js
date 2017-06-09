
import React from 'react';
import ReactDOM from 'react-dom';
import NewExpense from './components/new-expense.js';
import Expenses from './components/expenses.js';

ReactDOM.render(
  <div>
    <p>
      Hello World
    </p>
    <NewExpense />
    <Expenses />
  </div>,
  document.getElementById('app')
);
