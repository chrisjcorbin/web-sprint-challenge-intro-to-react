import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character'

const StyledApp = styled.div`
    .pageHeader {
      display: flex;
      justify-content: center;
    }
    h1 {
      font-size: 5rem;
      font-family: 'Lemonada', cursive;
    }
    `

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]); 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data.results);
      setCharacters(res.data.results);
    })
    .catch(err => {
      console.log('These arent the droids youre looking for:' + err);
    })
  }, []); 

  return (
    <StyledApp className="App">
      <div className="pageHeader">
      <h1 className="Header">Star Wars Characters</h1>
        </div>
        {characters.map(character => {
          return ( 
            <Character key={character.created}
            name={character.name}
            birthyear={character.birth_year}
            gender={character.gender}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            eyeColor={character.eye_color}
            rides={character.starships.length + character.vehicles.length} />
          )
        })}

    </StyledApp>
  );
}

export default App;