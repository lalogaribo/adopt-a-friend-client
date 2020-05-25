import React, { Component } from "react";
import "../style/createshelter.css"


export default class createShelter extends Component {

    render() {
        return (
            <header className="create-shelter">
            <body>
            <div className="ui form">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                    <h1>Create Your Shelter</h1>
                  <input type="name" placeholder="Name" class="txtb"/>
                  <input type="location" placeholder="Location" class="txtb"/>
                  <input type="phonenumber" placeholder="Phone Number" class="txtb"/>
                  <input type="email" placeholder="Email" class="txtb"/>
                  <input type="submit" className="signup-btn" value="Create Account"/>
                </div>
              </form>
            </div>
          </body>
          </header>
        )
    }
}