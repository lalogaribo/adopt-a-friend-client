import React, { Component } from "react";
import "../style/createpet.css"


export default class createShelter extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <header className="create-pet">
            <div className="ui form">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                    <h1>Add Your Pet</h1>
                  <input type="petName" placeholder="Pet Name" className="txtb"/>
                  <input type="breed" placeholder="Breed" className="txtb"/>
                  <input type="animal_type" placeholder="Animal Type" className="txtb"/>
                  <input type="submit" className="signup-btn" value="Create Account"/>
                </div>
              </form>
            </div>
          </header>
        )
    }
}