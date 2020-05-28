import React from "react";
import PetItem from "./PetItem";
import "../../style/createpet.css";

export default function PetList({ pets, handleClick}) {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} handleClick={handleClick}/>
      ))}
    </div>
  );
}
