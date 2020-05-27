import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarPage from "./component/navbar.js";
import HomePage from "./component/homepage.js";
import ShelterContainer from "./component/shelter/ShelterContainer";
import ShelterInformation from "./component/shelter/ShelterInformation";
import PetContainer from "./component/pet/PetContainer";
import SignUp from "./component/signup.js";
import CreateShelter from "./component/createshelter.js";
import CreatePet from "./component/createpet.js";
import Login from "./component/login.js";
import ShelterProfile from "./component/profile/ShelterProfile";
import UserProfile from "./component/profile/UserProfile";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shelter: {},
      user: {},
    };
  }
  render() {
    return (
      <BrowserRouter>
        <NavbarPage
          username={this.state.user.username}
          name={this.state.shelter.name}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/createShelter" component={CreateShelter} />
        <Route path="/createPet" component={CreatePet} />
        <Route
          path="/login"
          render={(props) => {
            return (
              <Login
                getShelterData={this.getShelterData}
                getUserData={this.getUserData}
                {...props}
              />
            );
          }}
        />
        <Route path="/shelters" exact component={ShelterContainer} />
        <Route path="/shelters/:id" component={ShelterInformation} />
        <Route path="/pets" component={PetContainer} />
        <Route path="/" exact component={HomePage} />
        <Route
          path="/shelter_profile"
          render={() => {
            return <ShelterProfile shelterInfo={this.state.shelter} />;
          }}
        />
        <Route path="/user_profile" component={UserProfile} />
      </BrowserRouter>
    );
  }

  getShelterData = (info) => {
    this.setState({ shelter: info });
  };

  getUserData = (info) => {
    this.setState({ user: info });
  };
}

export default App;
