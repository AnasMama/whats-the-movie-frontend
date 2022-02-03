import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ movie, idAnswer, isAnswer }) => (
    <Link to={`/movie/${movie}-${idAnswer}`}>
                <Img src={isAnswer ? `/ticket-trouvé.png` :`/ticket.png`} alt="Film à deviner" />
    </Link>    
);

const Img = styled.img`
    width: 15em;
`;

export default Card;