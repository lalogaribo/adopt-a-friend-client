import React, { useState, useEffect } from "react";

export default function ShelterProfile() {
  const [shelterInfo, setShelterInfo] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/current_shelter", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((shelter) => {
        console.log(shelter);
        setShelterInfo(shelter.shelter);
      });
  }, []);
  return (
    <div>
      <h1>{shelterInfo.username}'s shelter</h1>
      <h3>{shelterInfo.email}</h3>
      <p>{shelterInfo.location}</p>
    </div>
  );
}
