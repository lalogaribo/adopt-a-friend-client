import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../style/login.css";

export default class login extends Component {
  constructor(props) {
    super();
    this.state = {
      isShelter: false,
      email: "",
      password: "",
      username: "",
    };
  }
  render() {
    const { isShelter } = this.state;
    return (
      <header className="login">
        <body>
          <div className="ui form">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-form">
                <h1>Login</h1>
                {isShelter ? (
                  <input
                    type="email"
                    placeholder="Email"
                    className="txtb"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChangeText}
                  />
                ) : (
                  <input
                    type="username"
                    placeholder="Username"
                    className="txtb"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChangeText}
                  />
                )}

                <input
                  type="password"
                  placeholder="Password"
                  className="txtb"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChangeText}
                />
                <input
                  type="checkbox"
                  name="shelter"
                  value={isShelter}
                  onChange={this.handleShelterState}
                />
                <label htmlFor="shelter">I'm shelter</label>
                <input type="submit" className="signup-btn" value="Login" />
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
      URL = "http://localhost:3001/api/v1/login_shelter";
      fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shelter: {
            email: this.state.email,
            password: this.state.password,
          },
        }),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.props.getShelterData(data.data);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("isShelter", true);
          localStorage.setItem("shelter_id", data.data.id);

          this.props.history.push("/shelter_profile");
        });
    } else {
      URL = "http://localhost:3001/api/v1/login";
      fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
          },
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.props.getUserData(data.data);
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
