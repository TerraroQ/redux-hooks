import todoData from './todos/data.json'
import movieData from './movies/data.json'

// const InitialState = Object.assign(todoData, movieData);
const InitialState = {...todoData, ...movieData};

export default InitialState;