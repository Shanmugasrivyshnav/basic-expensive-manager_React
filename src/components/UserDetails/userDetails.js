import { Component } from "react";
import "./userDetails.css";
class UserDetails extends Component {
  state = {
    userName: "",
    email: "",
    phone: "",
    lowAmount: "",
    averageAmount: "",
    highAmount: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const { onSave } = this.props;

    onSave(this.state);
  };

  render() {
    const { userName, email, phone, lowAmount, averageAmount, highAmount } =
      this.state;

    return (
      <div className="user-details-container">
        <h1>Welcome to Expensive calculate</h1>
        <p className="description">For our daily Credit and Debit</p>

        <form onSubmit={this.onSubmitForm}>
          <label>Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
          />

          <label>Low Amount</label>
          <input
            type="number"
            value={lowAmount}
            onChange={(e) => this.setState({ lowAmount: e.target.value })}
          />

          <label>Average Amount</label>
          <input
            type="number"
            value={averageAmount}
            onChange={(e) => this.setState({ averageAmount: e.target.value })}
          />

          <label>High Amount</label>
          <input
            type="number"
            value={highAmount}
            onChange={(e) => this.setState({ highAmount: e.target.value })}
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    );
  }
}

export default UserDetails;
