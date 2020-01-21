import React from 'react';
import styled from 'styled-components'
import Todo from './Todo';
import { ShowTodos,  DeleteTodo, ToggleTodo, UseTodo } from '../hooks';

const TodoItems = () => {
    const { todos, completedTodos } = ShowTodos();
    const { deleteTodo, toggleTodo } = UseTodo();

    const StyledTodoList = styled.ul`
        background: palevioletred;
    `

    return (
        <div>
        <StyledTodoList>
            <h2>All todos</h2>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    toggleTodo={() => toggleTodo(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                />
            ))}
        </StyledTodoList>
        <StyledTodoList>
            <h2>Completed todos</h2>
            {completedTodos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    toggleTodo={() => toggleTodo(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                />
            ))}
        </StyledTodoList>
        
        </div>
    );
};
export default TodoItems;