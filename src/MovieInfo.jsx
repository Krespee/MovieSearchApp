import { useState } from "react"

export const MovieInfo = ({movie}) => {
  return (
    <div>
        <h2>{movie.title}</h2>
        <img width="200px" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
        <ul>
            <li>Original Title: {movie.original_title}</li>
            <li>Original Language: {movie.original_language}</li>
            <li>Overview: {movie.overview}</li>
            <li>Release Date: {movie.release_date}</li>
            <li>Vote Avarage: {movie.vote_average}</li>
            <li>Vote Count: {movie.vote_count}</li>
            <li>Popularity: {movie.popularity}</li>
        </ul>
    </div>
  )
}
