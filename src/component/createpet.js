import React, { Component } from "react";
import "../style/createpet.css";

export default class CreatePet extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      breed: "",
      animal_type: "",
    };
  }

  render() {
    const { name, breed, animal_type } = this.state;
    return (
      <header className="create-pet">
        <body>
          <div className="ui form">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-form">
                <h1>Create Pet</h1>
                <input
                  type="text"
                  placeholder="Pet Name"
                  className="txtb"
                  name="name"
                  value={name}
                  onChange={this.onChangeText}
                />
                <input
                  type="text"
                  placeholder="Breed"
                  className="txtb"
                  name="breed"
                  value={breed}
                  onChange={this.onChangeText}
                />
                <input
                  type="text"
                  placeholder="Animal Type"
                  className="txtb"
                  name="animal_type"
                  value={animal_type}
                  onChange={this.onChangeText}
                />
                <input
                  type="submit"
                  className="signup-btn"
                  value="Create pet"
                />
              </div>
            </form>
          </div>
        </body>
      </header>
    );
  }

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    let id = localStorage.getItem("shelter_id");
    const URL = `http://localhost:3001/api/v1/shelters/${id}/pets`;
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pet: {
          name: this.state.name,
          breed: this.state.breed,
          animal_type: this.state.animal_type,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => this.props.history.push("/shelter_profile"));
    this.setState({
      name: "",
      breed: "",
      animal_type: "",
    });
  };
}
