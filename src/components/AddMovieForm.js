import React from 'react';
import { UseTodo } from '../hooks';

const AddMovieForm = () => {
    let input;
    const { addTodo } = UseTodo();
    return (
        <React.Fragment>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    addTodo(input.value);
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </React.Fragment>
    );
};

export default AddMovieForm;