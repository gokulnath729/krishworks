import logo from "./logo.svg";
import "./App.css";
import Leftpanel from "./Leftpanel/Leftpanel";
import Patientdetails from "./Main/Patientdetails";
import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: true,
      patientData: {},
    };
  }

  handlePanel = () => {
    this.setState({ panelOpen: !this.state.panelOpen });
  };

  componentDidMount() {
    axios
      .get(" https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((response) => {
        this.setState({ patientData: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Header
          handlePanel={this.handlePanel}
          patientData={this.state.patientData}
        />
        <div className="App">
          <Leftpanel panelOpen={this.state.panelOpen} />
          <Patientdetails patientData={this.state.patientData} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
