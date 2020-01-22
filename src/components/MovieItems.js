import React from 'react';
import styled from 'styled-components'
import Movie from './Movie';
import { useMovies, useMovie } from '../hooks';

const MovieItems = () => {
    const { movies, newMovies } = useMovies();
    const { deleteMovie, toggleMovie } = useMovie();

    const StyledMovieList = styled.ul`
        background: palevioletred;
    `

    return (
        <div>
            <StyledMovieList>
                <h2>All movies</h2>
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        {...movie}
                        toggleMovie={() => toggleMovie(movie.id)}
                        deleteMovie={() => deleteMovie(movie.id)}
                    />
                ))}
            </StyledMovieList>
            <StyledMovieList>
                <h2>New movies</h2>
                {newMovies.map(movie => (
                    <Movie
                        key={movie.id}
                        {...movie}
                        toggleMovie={() => toggleMovie(movie.id)}
                        deleteMovie={() => deleteMovie(movie.id)}
                    />
                ))}
            </StyledMovieList>
        
        </div>
    );
};
export default MovieItems;