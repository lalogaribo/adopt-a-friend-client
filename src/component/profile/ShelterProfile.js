import React, { useState, useEffect } from "react";
import PetItem from "../pet/PetItem";

export default function ShelterProfile() {
  const [shelterInfo, setShelterInfo] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/current_shelter", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.data.pets);
        setShelterInfo(data.data);
      });
  }, []);
  return (
    <div>
      {Object.keys(shelterInfo).length === 0 ? (
        "Loading... Profile"
      ) : (
        <>
          <h1>{shelterInfo.username}'s shelter</h1>
          <h3>{shelterInfo.email}</h3>
          <p>{shelterInfo.location}</p>
          <h4>Current pets: {shelterInfo.pets.length}</h4>
          {shelterInfo.pets.map((pet) => (
            <PetItem key={pet.id} pet={pet} />
          ))}
        </>
      )}
    </div>
  );
}
