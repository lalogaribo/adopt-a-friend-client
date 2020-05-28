import React from "react";
import Card from 'react-bootstrap/Card'

export default function PetItem({ pet, handleClick}) {
  console.log(pet)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pet.picture_url} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>
          <p>{pet.breed}</p>
          <p>{pet.animal_type}</p>
        </Card.Text>
        <label>
          Friend status:{" "}
           {pet.is_adopted ? "Already adopted :)" : "Ready for adoption ^^"}
         </label>
         {!pet.is_adopted && <button onClick={ () => handleClick(pet)}>Adopt Me</button>}
      </Card.Body>
    </Card>
  );
}
