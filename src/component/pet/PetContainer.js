import React, { Component } from "react";
import PetList from "./PetList";

export default class PetContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      pets: [],
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        all pets
        <PetList pets={this.state.pets} />
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/pets")
      .then((resp) => resp.json())
      .then((pets) => this.setState({ pets: pets.data }));
  }
}
