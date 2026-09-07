import "./MovieList.css";
import type { MovieType } from "../types/movie-types";
import {
    useEffect, useState

} from "react";
import { getAllFilms } from "../services/app";
import Movie from "./Movie";

const MovieList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        (async () => {
            setMovies(await getAllFilms())
        })();
    }, []);

    console.log(`UseEffect után mi látszik: `, movies)
    return (
        <>
            <header>
                <h1>Filmek listája</h1>
                <input type="search" name="" id="" placeholder="Film címe..." />
                <h3>Kedvenc filmek száma</h3>
            </header>
            <main>
                {movies.length > 0 && movies.map((m, i ) => (
                    <Movie key={i} {...m} />
                ))}
            </main>
        </>
    )
}

export default MovieList