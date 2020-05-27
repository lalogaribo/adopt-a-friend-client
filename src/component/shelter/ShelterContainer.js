import React, { Component } from "react";
import ShelterList from "./ShelterList";
import "../../style/shelters.css";

class ShelterContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      shelters: [],
    };
  }
  render() {
    const { shelters } = this.state;
    return (
      <div className="container">
        <h3 className="shelter-title">Shelters</h3>
        <ShelterList shelters={shelters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/shelters")
      .then((resp) => resp.json())
      .then((shelters) => {
        console.log(shelters);
        this.setState({ shelters: shelters.data });
      });
  }
}

export default ShelterContainer;
