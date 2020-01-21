import { createSelector } from 'reselect';

const todosSelector = state => state.todos
const moviesSelector = state => state.movies

export const getAllTodos = todosSelector

export const getCompletedTodos = createSelector(
	todosSelector,
	todos => todos.filter(t => t.completed)
);

export const getAllMovies = moviesSelector

export const getNewMovies = createSelector(
	moviesSelector,
	movies => movies.filter(m => m.release > 2000)
)