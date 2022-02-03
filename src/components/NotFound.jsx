import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Oups !</h1>
      <p>
        Il semblerait que la page recherchée n'existe pas.
      </p>
      <p>
        Mais vous pouvez :
      </p>
      <div>
        <Link to="/">
          <button type="button">Revenir à la page d'accueil</button>
        </Link>
      </div>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default NotFound;