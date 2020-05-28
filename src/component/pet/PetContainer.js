import React, { Component } from "react";
import PetList from "./PetList";

export default class PetContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      pets: [],
    };
  }

  handleClick = (pet) => {
    fetch(`http://localhost:3001/api/v1/shelters/${pet.shelter_id}/pets/${pet.id}/adopt_me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify({
        is_adopted: true,
      }),
    }).then(resp => resp.json())
    .then(p => {
      console.log(p)
      if(p.data){
      let newPet = this.state.pets.filter(pet => pet.id === p.data.id ? p.data : pet)
      this.setState({pets: newPet})
      }
    })

  }

  render() {
    console.log(this.state);
    return (
      <div>
        all pets
        <PetList pets={this.state.pets}  handleClick={this.handleClick}/>
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/pets")
      .then((resp) => resp.json())
      .then((pets) => this.setState({ pets: pets.data }));
  }
}
