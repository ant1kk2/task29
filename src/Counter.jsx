import React from "react";
import Button from "./Components/Button/Button.jsx";
import Count from "./Components/Count/Count.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseValue = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decreaseValue = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div className="app">
        <Button symbol="+" onClick={this.increaseValue}/>
        <Count value={this.state.count}/>
        <Button symbol="-" onClick={this.decreaseValue}/>
      </div>
    );
  }
}

export default App;
