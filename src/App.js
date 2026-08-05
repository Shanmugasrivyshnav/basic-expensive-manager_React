import { Component } from "react";
import UserDetails from "./components/UserDetails/userDetails";
import MoneyManager from "./components/MoneyManager/moneymange";

class App extends Component {
  state = {
    showManager: false,
    user: {},
  };

  saveUser = (data) => {
    this.setState({
      user: data,
      showManager: true,
    });
  };

  render() {
    const { showManager, user } = this.state;

    return showManager ? (
      <MoneyManager user={user} />
    ) : (
      <UserDetails onSave={this.saveUser} />
    );
  }
}

export default App;
