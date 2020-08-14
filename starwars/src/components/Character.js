// Write your Character component here
import React from 'react'; 
import styled, { keyframes } from 'styled-components'
import CharacterCard from './CharacterCard'

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledDetails = styled.div`
    opacity: 0;
    transform: scale(10) rotateZ(180deg);
    animation: ${kf} 0.5s ease-in-out forwards;
    background-image: url('https://i.pinimg.com/originals/a7/7f/48/a77f486665f37182fa04cbbfd202a7ab.jpg');
    background-size: cover;
    width: 42%;
    margin: 0 auto;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    box-shadow: 2% 2% rebeccapurple;
    h3 {
        color: ${ () => {
            let hex = () => Math.floor(Math.random()*255).toString(16);
            return '#'+hex()+hex()+hex()
        }};
        text-shadow: .2rem .2rem ${ () => {
            let hex = () => Math.floor(Math.random()*255).toString(16);
            return '#'+hex()+hex()+hex()
        }};
        font-family: 'Lemonada', cursive;
        font-size: 2rem;
    }
    p {
        font-family: 'Lemonada', cursive;
    }
`

function Character(props) {

    return (
    <StyledDetails>
        <h3>{props.name}</h3>
        <CharacterCard
        name={props.name}
        birthyear={props.birthyear}
        gender={props.gender}
        height={props.height}
        mass={props.mass}
        hairColor={props.hairColor}
        eyeColor={props.eyeColor}
        rides={props.rides}/>
    </StyledDetails>
    ); 
}

export default Character;