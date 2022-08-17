import React, { Component } from "react";
import styles from "./layout.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={`${styles.header}`}>
        <div>TRY GLASS APP ONLINE</div>
      </div>
    );
  }
}
