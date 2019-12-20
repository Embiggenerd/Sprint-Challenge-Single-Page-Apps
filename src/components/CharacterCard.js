import React from "react";

export default function CharacterCard({name, status, species}) {
  return( 
  <div className="character-card">
    <p>{name}</p>
    <p>{status}</p>
    <p>{species}</p>
  </div>
  );
}
