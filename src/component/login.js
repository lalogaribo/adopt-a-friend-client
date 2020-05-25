import React, { Component } from "react";
import "../style/login.css"


export default class login extends Component {

    render() {
        return (
            <header className="login">
            <body>
            <div className="ui form">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                    <h1>Login</h1>
                  <input type="username" placeholder="Username" class="txtb"/>
                  <input type="password" placeholder="Password" class="txtb"/>
                  <input type="submit" className="signup-btn" value="Login"/>
                </div>
              </form>
            </div>
          </body>
          </header>
        )
    }
}