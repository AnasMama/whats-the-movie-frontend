import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Movie = () => {

    const params = useParams();
    const { id } = params;
    const idAnswer = id.split("-")[1]
    const idMovie = id.split("-")[0]

    const { register, handleSubmit } = useForm()

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=fb3bd5517db63a241a2ce4a3302e825d`)
            .then((res) => res.data)
            .then((data) => {
                setMovie(data)
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
    console.log(movie.original_title)
    const onSubmit = data => {
        if (data.answerSubmited.toLowerCase() === movie.original_title.toLowerCase()) {
            console.log("trop cool ca marche")
            axios
                .put(`http://localhost:5000/api/answers/${idAnswer}`, { id_movie: idMovie, is_answer: true })
                .then(Swal.fire(
                    'Bien joué !',
                    'Tu as trouvé le nom du film !',
                    'success'
                ))
        } else {
            Swal.fire(
                'Dommage...',
                "Tu n'as trouvé le nom du film ! Essaye encore !",
                'error'
            )
        }
    }

    return (
        <div>
            <Container>
                <ImgContainer>
                    <Link to={`/board/${idAnswer}`}>
                        <Back src="/arrow-retour.png" alt="Retour" />
                    </Link>
                    <GuessImg src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Film à deviner" />
                </ImgContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="answerSubmited">Quel est le film ?<br />
                        <Field type="text" {...register("answerSubmited", { maxLength: 1000 })} />
                    </label>
                    <InputSubmit type="submit" />
                </form>
            </Container>
        </div>
    );
}

const GuessImg = styled.img`
  display: block;
  width: 30%;
  min-width: 500px;
  filter: ${(props) => (props.blur ? props.blur : "blur(0.8rem)")};
  margin: 2em auto;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Field = styled.input`
    width: 30em;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 2px 4px 4px hsl(0deg 0% 0% / 0.38);
    border: 1px solid black;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 1.8em;
    &:focus {
      outline: none !important;
      border: 4px solid #DB504A;
    }

    @media (max-width: 768px) {
    width: 90%;
    border-radius: 10px;
  }
`

const ImgContainer = styled.div`
    position: relative;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 90%;
    text-align: center;

    label {
        margin: 5em auto;
        font-size: 1.3em;
    }

    @media (max-width: 768px) {
    width: 100%;
  }
`

const Back = styled.img`
    position: absolute;
    top: 15em;
    left: 5em;
    z-index: 1;
    background-color: #DB504A;
    margin-top: 0;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 2px 3px 3px lightgrey;
    font-size: 1.3em;
    font-family: "Roboto", sans-serif;
    &:hover {
        transform: scale(1.1)
        transition: 0.3s;
    }
`

const InputSubmit = styled.input`
    color: #FFFCF9;
    background-color: #202C39;
    width: 10em;
    border-radius: 0px 10px 10px 0px;
    box-shadow: 2px 4px 4px hsl(0deg 0% 0% / 0.38);
    border: 1px solid black;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 1.8em;

    &:hover {
        color: #202C39;
        background-color: #FFFCF9;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
    border-radius: 10px;
    height: 40px;
    margin-top: 0;
  }
`

export default Movie;