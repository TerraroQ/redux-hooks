import { combineReducers } from 'redux'
import todos from './todos'
import movies from './movies'

export default combineReducers({
  todos,
  movies
})
