import React, { Component } from "react";
import styles from "./layout.module.css";

export default class GlassList extends Component {
  render() {
    return (
      <div className={`${styles.glassList} row row-cols-6`}>
        {/* GlassList */}
        {this.props.glassesList.map((item) => {
          return (
            <img
              onClick={() => {
                this.props.handleShow(item.id);
              }}
              src={item.url}
              className="col"
            />
          );
        })}
      </div>
    );
  }
}
