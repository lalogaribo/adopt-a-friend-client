import React from "react";
import ShelterItem from "./ShelterItem";
import CardGroup from 'react-bootstrap/CardGroup'
import "../../style/shelterlist.css"

export default function ShelterList({ shelters }) {
  return (
    <CardGroup>
      {shelters.map((shelter) => (
        <ShelterItem key={shelter.id} shelter={shelter} />
      ))}
    </CardGroup>
  );
}
