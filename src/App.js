import React from "react";
import {Switch, Route } from 'react-router-dom';
import "./App.css";
import NavbarPage from "./component/navbar.js"
import HomePage from "./component/homepage.js"
import SignUp from "./component/signup.js"
import CreateShelter from "./component/createshelter.js"
import CreatePet from "./component/createpet.js"
import Login from "./component/login.js"

class App extends React.Component {
  render () {
    return (
      <div>
        <NavbarPage/>
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/createShelter" component={CreateShelter} />
          <Route path="/createPet" component={CreatePet} />
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
        <div>
      </div>
      </div>
    )
  }
}

export default App;
