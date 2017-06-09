/**
 * A simple form that allows the input of a new expense record.
 */

import React from 'react';
import styles from '../../styles/new-expense.css';

class NewExpense extends React.Component {

  constructor(props) {
    super(props);

    // TODO: state?
  }

  render() {

    return (
      <div className={styles.newExpense}>
        <table className="form">
          <tr className="form-row">
            <td className="form-label" >Category</td>
            <td className="form-value">
              <select id="category">
                <option value="Rent/Mortgage">Rent/Mortgage</option>
                <option value="Utilities">Utilities</option>
                <option value="Transportation">Transportation</option>
                <option value="Loans">Loans</option>
                <option value="Food">Food (non-grocery)</option>
                <option value="Grocery">Grocery</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Donations">Donations</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </td>
          </tr>
          <tr className="form-row">
            <td className="form-label" >Description</td>
            <td className="form-value">
              <input type="text" id="description" />
            </td>
          </tr>
          <tr className="form-row">
            <td className="form-label" >Amount</td>
            <td className="form-value">
              $<input type="text" id="amount" />
            </td>
          </tr>
          <tr className="form-row">
            <td className="form-label" >Status</td>
            <td className="form-value">
            <select id="status">
              <option value="Good">Good</option>
              <option value="Ok">Ok</option>
              <option value="Bad">Bad</option>
            </select>
            </td>
          </tr>
        </table>
      </div>
    );
  }

}

export default NewExpense;
