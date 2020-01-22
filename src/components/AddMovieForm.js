import React from 'react';
import { useMovie } from '../hooks';

const AddMovieForm = () => {
    let input;
    const { addMovie } = useMovie();
    return (
        <React.Fragment>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    addMovie(input.value);
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)} />
                {/* <input ref={node => (input = node)} /> */}
                <button type="submit">Add Todo</button>
            </form>
        </React.Fragment>
    );
};

export default AddMovieForm;