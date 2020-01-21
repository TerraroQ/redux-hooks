const movies = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: state.length !== 0 ? state[state.length - 1].id + 1 : 0,
					title: action.title,
					release: action.release,
					completed: false
				}
			]
		case 'DELETE_MOVIE':
			return state.filter(({ id }) => id !== action.id)
		case 'TOGGLE_MOVIE':
			return state.map(movie =>
				movie.id === action.id ? { ...movie, completed: !movie.completed } : movie
			)
		default:
			return state
	}
}
export default movies