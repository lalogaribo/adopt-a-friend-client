import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import NavbarPage from "./component/navbar.js"
import HomePage from "./component/homepage.js"
import SignUp from "./component/signup.js"
class App extends React.Component {
  render () {
    return (
      <div>
        <NavbarPage/>
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={HomePage} />
        </Switch>
        <div>
      </div>
      </div>
    )
  }
}

export default App;
