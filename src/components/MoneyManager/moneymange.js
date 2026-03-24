import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import MoneyDetails from "../MoneyDetails/moneylist";

import TransactionItem from "../TransitionDetails/transitionlist";

import "./moneymange.css";

const transactionTypeOptions = [
  { optionId: "INCOME", displayText: "Income" },
  { optionId: "EXPENSES", displayText: "Expenses" },
];

class MoneyManager extends Component {
  state = {
    titleInput: "",
    amountInput: "",
    typeInput: transactionTypeOptions[0].optionId,
    transactionsList: [],
  };

  onChangeTitle = (e) => {
    this.setState({ titleInput: e.target.value });
  };

  onChangeAmount = (e) => {
    this.setState({ amountInput: e.target.value });
  };

  onChangeType = (e) => {
    this.setState({ typeInput: e.target.value });
  };

  addTransaction = (e) => {
    e.preventDefault();
    const { titleInput, amountInput, typeInput } = this.state;

    if (titleInput === "" || amountInput === "") return;

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeInput,
    };

    this.setState((prevState) => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: "",
      amountInput: "",
      typeInput: transactionTypeOptions[0].optionId,
    }));
  };

  deleteTransaction = (id) => {
    this.setState((prevState) => ({
      transactionsList: prevState.transactionsList.filter(
        (each) => each.id !== id,
      ),
    }));
  };

  getIncome = () => {
    const { transactionsList } = this.state;
    return transactionsList
      .filter((each) => each.type === "INCOME")
      .reduce((sum, each) => sum + each.amount, 0);
  };

  getExpenses = () => {
    const { transactionsList } = this.state;
    return transactionsList
      .filter((each) => each.type === "EXPENSES")
      .reduce((sum, each) => sum + each.amount, 0);
  };

  render() {
    const { titleInput, amountInput, typeInput, transactionsList } = this.state;

    const income = this.getIncome();
    const expenses = this.getExpenses();
    const balance = income - expenses;

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>

          <MoneyDetails income={income} expenses={expenses} balance={balance} />

          <div className="transaction-container">
            {/* FORM */}
            <form onSubmit={this.addTransaction}>
              <h1>Add Transaction</h1>

              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                value={titleInput}
                onChange={this.onChangeTitle}
              />

              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                type="text"
                value={amountInput}
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type">TYPE</label>
              <select id="type" value={typeInput} onChange={this.onChangeType}>
                {transactionTypeOptions.map((each) => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button type="submit">Add</button>
            </form>

            {/* HISTORY */}
            <div className="history-container">
              <h1>History</h1>

              {/* HEADERS */}
              <ul>
                <li className="history-header">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p> </p>
                </li>

                {transactionsList.map((each) => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyManager;
