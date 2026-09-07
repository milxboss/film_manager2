import React from 'react'
import type { MovieType } from '../types/movie-types'

const Movie: React.FC<MovieType> = ({id, title, genre, year, description, rating}) => {
  return (
    <article id={id.toString()}>
        <h3>Film címe: {title}</h3>
        <p>{genre} * {year}</p>
        <p>Értékelése: {rating}</p>
        <p>{description}</p>
    </article>
  )
}

export default Movie