import "./MovieList.css";
import type { MovieType, MovieCompType } from "../types/movie-types";
import { useEffect, useMemo, useRef, useState } from "react";
import { getAllFilms } from "../services/app";
import Movie from "./Movie";
import { useFavorites } from "../context/FavoritesContext";

const MovieList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const {favorites, addFavorite} = useFavorites()
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        (async () => {
            setMovies(await getAllFilms())
        })();
        inputRef.current?.focus();
    }, []);

    const searchableMovies = useMemo(() => {
        if (!searchInput) return movies;
        return movies.filter(m => m.title.toLowerCase().includes(searchInput.toLocaleLowerCase()));
    }, [searchInput, movies])

    function handleFavorites(id: number) {
        const favoriteFilm = movies.find(f => f.id === id)
        if (favoriteFilm) /* {
            setFavorites(prev => favorites.includes(favoriteFilm!.title) ? prev : [...prev, favoriteFilm!.title])
        } */
        addFavorite(favoriteFilm.title);    
    }

    console.log(`UseEffect után mi látszik: `, movies)
    return (
        <>
            <header>
                <h1>Filmek listája</h1>
                <input type="search" name="" id="" placeholder="Film címe..." ref={inputRef} onChange={e => setSearchInput(e.target.value)} />
                <h3>Kedvenc filmek száma: {favorites.length}</h3>
            </header>
            <main>
                {searchableMovies.length > 0 && searchableMovies.map((m, i) => (
                    <Movie key={i} {...m} addFavorite={handleFavorites} />
                ))}
            </main>
        </>
    )
}

export default MovieList