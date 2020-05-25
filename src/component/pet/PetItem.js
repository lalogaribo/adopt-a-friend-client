import React from "react";

export default function PetItem({ pet }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{pet.name}</h2>
        <h6 className="card-subtitle mb-2 text-muted">{pet.breed}</h6>
        <p>{pet.animal_type}</p>
        <label>
          Friend status:{" "}
          {pet.isAdopted ? "Already adopted :)" : "Ready for adoption ^^"}
        </label>
        {pet.isAdopted ? null : <button>Adopt Me</button>}
      </div>
    </div>
  );
}
