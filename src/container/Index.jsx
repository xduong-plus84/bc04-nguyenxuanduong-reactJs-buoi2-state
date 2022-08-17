import React, { Component } from "react";
import { dataGlasses } from "../assets/dataGlasses";
import GlassList from "./GlassList";
import Header from "./Header";
import styles from "./layout.module.css";
import Model from "./Model";

export default class Index extends Component {
  state = {
    glassesList: dataGlasses,
    detailGlass: {},
    // detailGlass: dataGlasses[0],
  };
  handleShow = (id) => {
    let index = this.state.glassesList.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.setState({ detailGlass: dataGlasses[index] });
    }
  };
  render() {
    return (
      <div className={`${styles.layout}`}>
        <Header />
        <Model detailGlass={this.state.detailGlass} />
        <GlassList
          glassesList={this.state.glassesList}
          handleShow={this.handleShow}
        />
      </div>
    );
  }
}
