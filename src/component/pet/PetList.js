import React from "react";
import PetItem from "./PetItem";
import "../../style/createpet.css";

export default function PetList({ pets }) {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
