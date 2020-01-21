import React, { memo } from 'react'
import styled from 'styled-components'
import DeleteButton from './DeleteButton'



const Todo = ({ completed, toggleTodo, deleteTodo, text }) => {

  const StyledTodo = styled.li`
    font-size: 20px;
    color: white;
    text-decoration: ${completed ? 'line-through' : 'none'};
  `

  return (
    <div>
      <StyledTodo
        onClick={toggleTodo}
      >
        {text}
      </StyledTodo>
      <DeleteButton onClick={deleteTodo} />
    </div>
  );
};

export default memo(Todo);