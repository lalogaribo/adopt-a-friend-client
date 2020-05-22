import React from "react";
import "./App.css";
import NavbarPage from "./component/navbar.js"
import HomePage from "./component/homepage.js"
class App extends React.Component {
  render () {
    return (
      <div>
        <NavbarPage/>
        <div>
          <HomePage/>
        </div>
      </div>
    )
  }
}

export default App;
