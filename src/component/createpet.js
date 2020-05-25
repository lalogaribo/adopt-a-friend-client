import React, { Component } from "react";
import "../style/createpet.css"


export default class createShelter extends Component {

    render() {
        return (
            <header className="create-pet">
            <body>
            <div className="ui form">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                    <h1>Create Your Shelter</h1>
                  <input type="petName" placeholder="Pet Name" class="txtb"/>
                  <input type="breed" placeholder="Breed" class="txtb"/>
                  <input type="animal_type" placeholder="Animal Type" class="txtb"/>
                  <input type="submit" className="signup-btn" value="Create Account"/>
                </div>
              </form>
            </div>
          </body>
          </header>
        )
    }
}