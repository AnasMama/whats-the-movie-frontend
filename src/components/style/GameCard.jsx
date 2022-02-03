import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function GameCard({ name, id }) {
    return (
        <Link to={`/board/${id}`}>
            <GameContainer>
                <div>
                    <p>{name}</p>
                </div>          
            </GameContainer>
        </Link>
    )
}

const GameContainer = styled.div`
    color: #08090A;
    background-image: url("/film.png");
    background-size: cover;
    height: 8em;
    width: 8em;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0em;
    padding: auto;
  }
`



export default GameCard;