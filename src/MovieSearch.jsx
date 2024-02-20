import { useState } from "react"
import { MovieInfo } from "./MovieInfo"

export const MovieSearch = () => {
  const urlBase = "https://api.themoviedb.org/3/search/movie"
  const API_KEY = "ff0656d2fbcb5e08da30c6f3b251f38c"
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

 const fetchMovie = async (movieName) => {
  try {
    const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
    const data = await response.json()
    setMovies(data.results)
  } catch (error) {
    console.log(error);
  }
 }


  const handleInputChange = (e) =>{
    setSearch(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchMovie(e.target[0].value)
  }

  return (
    <div>
      <h1 className="title">MovieSearch</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Search a Movie"
        value={search}
        onChange={handleInputChange}
        />
        <input type="submit" value="Search" />
      </form>
      {movies && movies.length > 0 && <MovieInfo movie={movies[0]}/>}
      <div className="movie-list">
        {movies.map((movie)=>(
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
