import React from "react";
import Button from "./Components/Button/Button.jsx";
import Count from "./Components/Count/Count.jsx";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
  }

  increaseValue = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decreaseValue = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  resetValue = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="app">
        <Button symbol="+" onClick={this.increaseValue} />
        <Count value={this.state.count} />
        <Button symbol="-" onClick={this.decreaseValue} />
        <Button symbol="Reset" onClick={this.resetValue} />
      </div>
    );
  }
}

export default Counter;
