import styled from "styled-components";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import GameCard from "./style/GameCard";
import axios from "axios";

function Home() {
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/players/")
            .then((res) => res.data)
            .then((data) => setPlayer(data))
            .catch((err) => console.log(err));
    }, []);

    const playerCreation = async () => {
        const { value: text } = await Swal.fire({
            input: "text",
            inputLabel: "Entrez votre nom de joueur",
            inputPlaceholder: "Tapez le nom ici",
            inputAttributes: {
                "aria-label": "Tapez le nom ici",
            },
            showCancelButton: false,
        });
        if (text) {
            axios
                .post("http://localhost:5000/api/players/", {
                    name: text,
                    score: 0
                })
                .then((res) => res.data)
                .then((data) => setPlayer([...player, data]))
                .catch((err) => {
                    console.log(err);
                    Swal.fire("Erreur lors de la création !");
                });
            Swal.fire({
                title: "Nouveau nouvelle partie créée avec succès !",
            });
        }
    };

    return (
        <DashBoard>
            <Logo src="/Logo_anachou_et_son_site_qui_mempeche_de_dormir.png"
                alt="logo"/>
            <NewButton type="button" onClick={playerCreation}>
                Nouvelle partie
            </NewButton>
            <h2>Parties en cours</h2>
            <GameContainer>
                {player?.map((target) => (
                    <GameCard
                        name={target.name}
                        id={target.id}
                    />
                ))}
            </GameContainer>
        </DashBoard>
    );
}

const GameContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const DashBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2em;
  }
`;

const Logo = styled.img`
  width: 30%;
`;

const NewButton = styled.button`
    z-index: 1;
    color: #FFFCF9;
    background-color: #DB504A;
    width: 10rem;
    border-radius: 10px;
    /* box-shadow: 2px 3px 3px #FFFCF9; */
    font-size: 1.3em;
    font-weight: 800;
    font-family: 'Varela Round', sans-serif;
    border: none;
    padding: 20px;
    &:hover {
        color: #DB504A;
        background-color: #FFFCF9;
        transform: scale(1.1)
        transition: 0.3s;
    }
`

export default Home;