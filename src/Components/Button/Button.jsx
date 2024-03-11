import React from "react";
import styles from "./style.module.css";

class Button extends React.Component {
  render() {
    return (
      <button className={styles.btn} onClick={this.props.onClick}>
        {this.props.symbol}
      </button>
    );
  }
}

export default Button;
