import React from "react";
import PetList from "../pet/PetList";

export default class ShelterInformation extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shelterPets: [],
    };
  }
  componentDidMount() {
    const { id } = this.props.location.state.shelter;
    fetch(`http://localhost:3001/api/v1/shelters/${id}/pets`)
      .then((resp) => resp.json())
      .then((pets) => this.setState({ shelterPets: pets.data }));
  }
  render() {
    const {
      id,
      name,
      location,
      phone_number,
      email,
    } = this.props.location.state.shelter;
    console.log(this.state);

    return (
      <div>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <p>
          {phone_number} - {email}
        </p>
        <hr />
        Available pets {this.state.shelterPets.length}
        <PetList pets={this.state.shelterPets} />
      </div>
    );
  }
}
