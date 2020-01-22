import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addTodo, deleteTodo, toggleTodo, addMovie, deleteMovie, toggleMovie } from '../actions';
import { getAllTodos, getCompletedTodos, getAllMovies, getNewMovies } from '../selectors';

export const useTodos = () => {
    const todos = useSelector(getAllTodos, shallowEqual);
    const completedTodos = useSelector(getCompletedTodos, shallowEqual);
    return {
        todos,
        completedTodos
    };
};

export const useMovies = () => {
    const movies = useSelector(getAllMovies, shallowEqual);
    const newMovies = useSelector(getNewMovies, shallowEqual);
    return {
        movies,
        newMovies
    };
};

export const useMovie = () => {
    const dispatch = useDispatch();
    const deleteMovieItem = useCallback(
        movie => {
            dispatch(deleteMovie(movie));
        },
        [dispatch]
    );
    const toggleMovieItem = useCallback(
        movie => {
            dispatch(toggleMovie(movie));
        },
        [dispatch]
    );
    const addMovieItem = useCallback(
        movie => {
            dispatch(addMovie(movie));
        },
        [dispatch]
    );
    return {
        addMovie: addMovieItem,
        toggleMovie: toggleMovieItem,
        deleteMovie: deleteMovieItem
	}
}



export const useTodo = () => {
    const dispatch = useDispatch();
    const deleteTodoItem = useCallback(
        todo => {
            dispatch(deleteTodo(todo));
        },
        [dispatch]
    );
    const toggleTodoItem = useCallback(
        todo => {
            dispatch(toggleTodo(todo));
        },
        [dispatch]
    );
    const addTodoItem = useCallback(
        todo => {
            dispatch(addTodo(todo));
        },
        [dispatch]
    );
    return {
        addTodo: addTodoItem,
        toggleTodo: toggleTodoItem,
        deleteTodo: deleteTodoItem
	}
}