import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  console.log('characters', characters)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => setCharacters(res.data.results))
  }, []);

  return (
    <section className="character-list">
      <h2>Characters from rick and morty</h2>
      {characters.map(char => <CharacterCard name={char.name} status={char.status} species={char.species} />)}
    </section>
  );
}
