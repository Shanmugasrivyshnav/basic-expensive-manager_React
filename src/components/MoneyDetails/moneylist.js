import "./moneylist.css";

const MoneyDetails = (props) => {
  const { income, expenses, balance } = props;

  return (
    <div className="money-details-container">
      {/* BALANCE */}
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">₹ {balance}</p>
        </div>
      </div>

      {/* INCOME */}
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">₹ {income}</p>
        </div>
      </div>

      {/* EXPENSES */}
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">₹ {expenses}</p>
        </div>
      </div>
    </div>
  );
};

export default MoneyDetails;
