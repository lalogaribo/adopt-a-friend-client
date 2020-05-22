import React, { Component } from "react";
import "../style/signup.css"

export default class signUp extends Component {
    render (){
        return (
        <header>
        <body>
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
                <h1>Sign Up</h1>
              <input type="firstname" placeholder="FirstName" class="txtb"/>
              <input type="lastname" placeholder="Last Name" class="txtb"/>
              <input type="username" placeholder="Username" class="txtb"/>
              <input type="password" placeholder="Password" class="txtb"/>
              <input type="email" placeholder="email" class="txtb"/>
              <input type="submit" className="signup-btn" value="Create Account"/>
            </div>
          </form>
        </div>
      </body>
      </header>
        )}
}