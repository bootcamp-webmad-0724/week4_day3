import { useState } from 'react'
import moviesData from './../../data/moviesData.json'
import MovieCard from '../MovieCard/MovieCard'

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)

    const removeMovie = movieIdToDelete => {
        const filteredMovies = movies.filter(elm => elm._id != movieIdToDelete)
        setMovies(filteredMovies)
    }

    return (
        <div className="MoviesList">

            <h1>Películas</h1>

            {
                movies.map(eachMovie => {

                    return (
                        <MovieCard key={eachMovie._id} {...eachMovie} deleteMovie={removeMovie} />
                    )
                })
            }
        </div>
    )
}


export default MoviesList