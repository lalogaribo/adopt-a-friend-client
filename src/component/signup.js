import React, { Component } from "react";
import "../style/signup.css";

export default class signUp extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      name: "",
      email: "",
      first_name: "",
      last_name: "",
      address: "",
      password: "",
      password_confirmation: "",
      isShelter: false,
      location: "",
      phone_number: "",
    };
  }

  userRegistration = () => {
    const {
      username,
      last_name,
      first_name,
      email,
      address,
      password,
      password_confirmation,
    } = this.state;
    return (
      <>
        <input
          type="text"
          placeholder="First Name"
          className="txtb"
          name="first_name"
          value={first_name}
          onChange={this.handleChangeText}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="txtb"
          name="last_name"
          value={last_name}
          onChange={this.handleChangeText}
        />
        <input
          type="text"
          placeholder="Username"
          className="txtb"
          name="username"
          value={username}
          onChange={this.handleChangeText}
        />
        <input
          type="text"
          placeholder="address"
          className="txtb"
          name="address"
          value={address}
          onChange={this.handleChangeText}
        />
        <input
          type="email"
          placeholder="Email"
          className="txtb"
          name="email"
          value={email}
          onChange={this.handleChangeText}
        />
        <input
          type="password"
          placeholder="Password"
          className="txtb"
          name="password"
          value={password}
          onChange={this.handleChangeText}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="txtb"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChangeText}
        />
      </>
    );
  };

  shelterRegistration = () => {
    const {
      name,
      location,
      phone_number,
      email,
      password,
      password_confirmation,
    } = this.state;
    return (
      <>
        <input
          type="text"
          placeholder="Name"
          className="txtb"
          name="name"
          value={name}
          onChange={this.handleChangeText}
        />
        <input
          type="text"
          placeholder="Location"
          className="txtb"
          name="location"
          value={location}
          onChange={this.handleChangeText}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="txtb"
          name="phone_number"
          value={phone_number}
          onChange={this.handleChangeText}
        />
        <input
          type="email"
          placeholder="Email"
          className="txtb"
          name="email"
          value={email}
          onChange={this.handleChangeText}
        />
        <input
          type="password"
          placeholder="Password"
          className="txtb"
          name="password"
          value={password}
          onChange={this.handleChangeText}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="txtb"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChangeText}
        />
      </>
    );
  };
  render() {
    return (
      <header className="signup">
        <body>
          <div className="ui form">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-form">
                <h1>Sign Up</h1>
                {this.state.isShelter
                  ? this.shelterRegistration()
                  : this.userRegistration()}
                  <div>
                  <input type="checkbox"
                  name="shelter"
                  value={this.state.isShelter}
                  onChange={this.handleShelterState}/>
                <label htmlFor="shelter" className="txtb">I'm shelter</label>
                  </div>
                <input
                  type="submit"
                  className="signup-btn"
                  value="Create Account"
                />
              </div>
            </form>
          </div>
        </body>
      </header>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isShelter) {
      URL = "http://localhost:3000/api/v1/shelters";
      fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shelter: {
            name: this.state.name,
            location: this.state.location,
            phone_number: this.state.phone_number,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          },
        }),
      })
        .then((resp) => {
          resp.json();
        })
        .then((data) => {
          localStorage.setItem("loggedIn", true);
          this.props.history.push("/shelter_profile");
        });
    } else {
      URL = "http://localhost:3001/api/v1/users";
      fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            address: this.state.address,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          },
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          localStorage.setItem("loggedIn", true);
          this.props.history.push("/user_profile");
        });
    }
  };
  handleChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleShelterState = (e) => {
    this.setState((prevState) => {
      return { isShelter: !prevState.isShelter };
    });
  };
}
