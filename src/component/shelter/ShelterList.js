import React from "react";
import ShelterItem from "./ShelterItem";

export default function ShelterList({ shelters }) {
  return (
    <div>
      {shelters.map((shelter) => (
        <ShelterItem key={shelter.id} shelter={shelter} />
      ))}
    </div>
  );
}
