import React, { memo } from 'react'
import styled from 'styled-components'
import DeleteButton from './DeleteButton'



const Movie = ({ completed, toggleMovie, deleteMovie, title, release }) => {

  const StyledMovie = styled.li`
    font-size: 20px;
    color: white;
    font-weight: bold;
    text-decoration: ${completed ? 'line-through' : 'none'};
  `

  return (
    <div>
      <StyledMovie onClick={toggleMovie}>
        <p>{title}</p>
        <p>{release}</p>
      </StyledMovie>
      <DeleteButton onClick={deleteMovie} />
    </div>
  );
};

export default memo(Movie);