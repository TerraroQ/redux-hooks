// let nextTodoId = 0;
export const addTodo = (text, id, completed) => ({
  type: 'ADD_TODO',
  id: id,
  text,
  completed: completed
})
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id: id
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const addMovie = (title, release, id, completed) => ({
  type: 'ADD_MOVIE',
  id: id,
  title: title,
  release: release,
  completed: completed
})
export const deleteMovie = id => ({
  type: 'DELETE_MOVIE',
  id: id
})
export const toggleMovie = id => ({
  type: 'TOGGLE_MOVIE',
  id
})
