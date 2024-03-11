import React from "react";
import styles from "./style.module.css";

class Count extends React.Component {
  render() {
    return <h1 className={styles.value}>{this.props.value}</h1>;
  }
}

export default Count;