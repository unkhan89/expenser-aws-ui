
import 'babel-polyfill';
import React from 'react';

import NewExpense from './new-expense.jsx';
import Expenses from './expenses.jsx';

class App extends React.Component {

  render() {
    return(
      <div id="app">
        <NewExpense />
        <Expenses />
      </div>
    );
  }

}

export default App;
