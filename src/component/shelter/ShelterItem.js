import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";


export default function ShelterItem({ shelter }) {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg" />
      <Card.Body>
        <Card.Title>{shelter.name}</Card.Title>
        <Card.Text>
          <p>Located - {shelter.location}</p>
        </Card.Text>
        <Link to={{pathname: `/shelters/${shelter.id}`,
            state: {
              shelter: shelter,
            },
          }}
        >
        Go To Shelter
        </Link>
      </Card.Body>
    </Card>
    )

}
