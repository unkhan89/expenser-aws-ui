/**
 * A collection of expense records.
 */

import React from 'react';
import Expense from './expense.js';

class Expenses extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};

    // TODO: get list of expenses from API/DB, for now using hard coded data:
    console.log('About to get expesnses data...');
    this.state.expenses = [
      {
        'timestamp' : 1234567890000,
        'category' : 'Utilities',
        'description' : 'Phone bill',
        'amount' : 150,
        'status' : 'Good'
      },
      {
        'timestamp' : 1234567891000,
        'category' : 'Rent/Mortgage',
        'description' : 'NA',
        'amount' : 800,
        'status' : 'Ok'
      },
      {
        'timestamp' : 1234567892000,
        'category' : 'Food',
        'description' : 'Star Bucks',
        'amount' : 2,
        'status' : 'Bad'
      }
    ];
    console.log('Done getting expenses data');
  }

  render() {

    return (
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.expenses.map(function(expense, index) {
              return(
                <Expense
                    key={"expense-id-" + index}
                    timestamp={expense.timestamp}
                    category={expense.category}
                    description={expense.description}
                    amount={expense.amount}
                    status={expense.status}
                />
              );
            })
          }
        </tbody>
      </table>
    );
  }

}

export default Expenses;
