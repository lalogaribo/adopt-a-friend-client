import React from "react";
import PetList from "../pet/PetList";
import "../../style/shelterinfo.css"

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
      .then((pets) => {console.log(pets)
      this.setState({ shelterPets: pets.data })});
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
      let newPet = this.state.shelterPets.filter(pet => pet.id === p.data.id ? p.data : pet)
      this.setState({shelterPets: newPet})
      }
    })

  }

  render() {
    const {
      id,
      name,
      location,
      phone_number,
      email,
    } = this.props.location.state.shelter;

    return (
      <div>
  <body className="shelter-profile">
    <div class="profile-card">
      <div class="top-section">
        <i class="message fas fa-envelope"></i>
        <i class="notif fas fa-bell"></i>
        <div class="pic">
          <img src="https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg" alt=""></img>
        </div>
        <div class="name">{name}</div>
      </div>
      <div class="bottom-section">
        <div class="Location">Located <span>{location}</span></div>
        <div class="border"></div>
        <div class="phone">Number <span>{phone_number}</span></div>
        <div class="border"></div>
        <div class="email">Email <span>{email}</span></div>
      </div>
      </div>
  </body>
        <hr />
        Available pets {this.state.shelterPets.length}
        <PetList pets={this.state.shelterPets} handleClick={this.handleClick}/>
      </div>
    );
  }
}
