import React, { Component } from "react";
import "../style/createshelter.css"


export default class createShelter extends Component {
    state = {
        name: "",
        password: "",
        location: "",
        phone_number: "",
        email: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch("http://localhost:3000/api/v1/shelters", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
         body: JSON.stringify({shelter: this.state})
        });
      }

    handleChange = event => {
        event.persist()
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    render() {
        return (
            <header className="create-shelter">
            <div className="ui form">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                    <h1>Create Your Shelter</h1>
                  <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} className="txtb"/>
                  <input type="password"  id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="txtb"/>
                  <input type="text"  id="location" placeholder="Location" value={this.state.location} onChange={this.handleChange} className="txtb"/>
                  <input type="text" id="phone_number" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} className="txtb"/>
                  <input type="email" id= "email" placeholder="Email" value={this.state.email} onChange={this.handleChange} className="txtb"/>
                  <input type="submit" className="signup-btn" value="Create Account"/>
                </div>
              </form>
            </div>
          </header>
        )
    }
}