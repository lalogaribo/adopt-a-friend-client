import React from "react";
import PetItem from "./PetItem";

export default function PetList({ pets }) {
  return (
    <div>
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
