import {combineReducers} from 'redux'

import {characters} from './characters.jsx'
import {currentTurn} from './currentTurn.js'

export var reducer = combineReducers({
  characters,
  currentTurn
})
