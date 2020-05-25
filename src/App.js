import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarPage from "./component/navbar.js";
import HomePage from "./component/homepage.js";
import ShelterContainer from "./component/shelter/ShelterContainer";
import ShelterInformation from "./component/shelter/ShelterInformation";
import PetContainer from "./component/pet/PetContainer";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarPage />
        <Route path="/" exact component={HomePage} />
        <Route path="/shelters" exact component={ShelterContainer} />
        <Route path="/shelters/:id" component={ShelterInformation} />
        <Route path="/pets" component={PetContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
