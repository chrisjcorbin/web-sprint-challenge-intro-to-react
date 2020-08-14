import React, { useState, useEffect } from 'react'; 

function CharacterCard(props) {

    return (
        <div>
            <p>Birth Year:{props.birthyear}</p>
            <p>Gender:{props.gender} </p>
            <p>Height:{props.height}</p>
            <p>Weight:{props.mass}</p>
            <p>Hair Color:{props.hairColor}</p>
            <p>Eye Color:{props.eyeColor}</p>
            <p>Mass:{props.mass}</p>
            <p>Rides:{props.rides} </p>
        </div>
    ); 
}

export default CharacterCard; 