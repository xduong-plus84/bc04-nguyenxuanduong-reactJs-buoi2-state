import React, { Component } from "react";
import styles from "./layout.module.css";

export default class Model extends Component {
  renderGlassInfo = () => {
    let { url, name, price, desc } = this.props.detailGlass;
    console.log("this.props.detailGlass: ", this.props.detailGlass);
    if (Object.entries(this.props.detailGlass).length === 0) {
      console.log("rong");
      return;
    } else {
      console.log("không rỗng");
      return (
        <div className={`${styles.model}`}>
          <img src={url} alt="" />
          <div className={`${styles.glassInfo}`}>
            <div>
              {" "}
              <strong className="text-info">{name}</strong>
              <i className="ml-5 text-danger">$ {price}</i>
            </div>
            <span className="font-weight-light">{desc}</span>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div className={`${styles.model}`}>
        <div>{this.renderGlassInfo()}</div>
      </div>
    );
  }
}
