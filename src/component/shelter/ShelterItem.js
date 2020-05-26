import React from "react";
import { Link } from "react-router-dom";

export default function ShelterItem({ shelter }) {
  return (
    <div className="card">
      <div className="card-body">
        <Link
          to={{
            pathname: `/shelters/${shelter.id}`,
            state: {
              shelter: shelter,
            },
          }}
          className="card-title"
        >
          {shelter.name}
        </Link>
        <h6 className="card-subtitle mb-2 text-muted">
          {shelter.location} - {shelter.phone_number}
        </h6>
      </div>
    </div>
  );
}
