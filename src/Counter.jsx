import React from "react";
import Button from "./Components/Button/Button.jsx";
import Count from "./Components/Count/Count.jsx";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    if (/^(?!0\d)(\d+(\.\d+)?|0\.\d+)$/gm.test(this.props.initialValue)) {
      this.state = {
        count: this.props.initialValue,
      };
      this.isValid = true;
    } else {
      this.state = {
        count: "Не валiдне число",
      };
      this.isValid = false;
    }
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
        <Button
          symbol="+"
          onClick={this.isValid ? this.increaseValue : () => {}}
        />
        <Count value={this.state.count} />
        <Button
          symbol="-"
          onClick={this.isValid ? this.decreaseValue : () => {}}
        />
        <Button
          symbol="Reset"
          onClick={this.isValid ? this.resetValue : () => {}}
        />
      </div>
    );
  }
}

export default Counter;
