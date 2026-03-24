import "./transitionlist.css";

const TransactionItem = (props) => {
  const { details, deleteTransaction } = props;
  const { id, title, amount, type } = details;

  const onDelete = () => {
    deleteTransaction(id);
  };

  const displayType = type === "INCOME" ? "Income" : "Expenses";

  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>₹ {amount}</p>
      <p>{displayType}</p>

      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  );
};
export default TransactionItem;
