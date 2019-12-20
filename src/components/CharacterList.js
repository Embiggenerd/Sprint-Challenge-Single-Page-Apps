import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [query, setQuery] = useState("");
  console.log('characters', characters)
  console.log('filteredCharacters', filteredCharacters)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => setCharacters(res.data.results))
  }, []);

  // We populate filteredCharacters on every characters update
  useEffect(()=>setFilteredCharacters(characters), [characters])

  useEffect(()=>{ // Filters the characters on every update to query state
    setFilteredCharacters(characters.filter(char => {
      return (
        char.name.toLowerCase().includes(query.toLowerCase())
      )
    }))
  }, [query])

  return (
    <div>
      <SearchForm setQuery={setQuery} query={query}/>
      <div className="character-list">
        <h2>Characters from rick and morty</h2>
        {filteredCharacters.map(char => <CharacterCard key={char.id} name={char.name} status={char.status} species={char.species} />)}
      </div>
    </div>
  );
}
