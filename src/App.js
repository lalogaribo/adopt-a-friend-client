import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarPage from "./component/navbar.js";
import HomePage from "./component/homepage.js";
import ShelterContainer from "./component/shelter/ShelterContainer";
import ShelterInformation from "./component/shelter/ShelterInformation";
import PetContainer from "./component/pet/PetContainer";
import SignUp from "./component/signup.js"
import CreateShelter from "./component/createshelter.js"
import CreatePet from "./component/createpet.js"
import Login from "./component/login.js"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarPage />
        <Route path="/signup" component={SignUp}/>
        <Route path="/createShelter" component={CreateShelter} />
        <Route path="/createPet" component={CreatePet} />
        <Route path="/login" component={Login} />
        <Route path="/shelters" exact component={ShelterContainer} />
        <Route path="/shelters/:id" component={ShelterInformation} />
        <Route path="/pets" component={PetContainer} />
         <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    );
  }
}

export default App;
