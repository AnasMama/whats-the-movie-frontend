import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Board = () => {

    const params = useParams();
    const { id } = params;

    const [boardMovie, setBoardMovie] = useState([{ id_movie: "123" }]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/answers/?project_id=${id}`)
            .then((res) => res.data)
            .then((data) => {
                setBoardMovie(data)
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Un problème est survenu. Réessayez dans quelques minutes.',
                })
            })
    }, []);

    return (
        <div>
            <BoardContainer>
                {boardMovie.map(e => {
                    return <Card movie={e.id_movie} idAnswer={e.id} isAnswer={e.is_answer} />
                })}
            </BoardContainer>
            <Link to={`/`}>
                <Back src="/arrow-retour.png" alt="Retour"/>
            </Link>
        </div>
    );
}

const BoardContainer = styled.div`
    display: flex;
    justify-content: space-around;

    flex-flow: row wrap;
    width: 80%;
    margin: 2em auto;

`;

const Back = styled.img`
    position: absolute;
    top: 15em;
    left: 5em;
    z-index: 1;
    background-color: #DB504A;
    margin-top: 0;
    width: 50px;
    height: 50px;
    padding: 0.5em;
    border-radius: 50%;
    box-shadow: 2px 3px 3px lightgrey;
    font-size: 1.3em;
    font-family: "Roboto", sans-serif;
    &:hover {
        transform: scale(1.1)
        transition: 0.3s;
    }
`

export default Board;