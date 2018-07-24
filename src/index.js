import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

class App extends React.Component {
  state = { user: {} };
  static defaultProps = {
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    }).isRequired
  };

  onTextBoxChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { name, age } = this.state.user;

    return (
      <div>
        <h1>Enter User Info!</h1>
        Name:{" "}
        <input
          name="name"
          type="text"
          onChange={this.onTextBoxChange}
          value={this.state.user.name}
        />
        Age:{" "}
        <input
          name="age"
          type="text"
          onChange={this.onTextBoxChange}
          value={this.state.user.age}
        />
        <br />
        <h2>Entered Info</h2>
        Name: <div>{name}</div>
        Age: <div>{age}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
