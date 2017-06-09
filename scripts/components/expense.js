/**
 * A single expense record.
 */

import React from 'react';
import styles from '../../styles/expense.css';

class Expense extends React.Component {

  constructor(props) {
    console.log('Expense() props: ' + JSON.stringify(props));
    super(props);
  }

  render() {

    var dateTime = new Date(this.props.timestamp).toString();

    return (
      <tr className={styles.expense}>
        <td className={styles.expenseTd}>{dateTime}</td>
        <td className={styles.expenseTd}>{this.props.category}</td>
        <td className={styles.expenseTd}>{this.props.description}</td>
        <td className={styles.expenseTd}>{this.props.amount}</td>
        <td className={styles.expenseTd}>{this.props.status}</td>
      </tr>
    );
  }

}

export default Expense;
