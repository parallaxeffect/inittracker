import {combineReducers} from 'redux'

import {reducer as characters} from './characters.jsx'
import {currentTurn} from './currentTurn.js'

export var reducer = combineReducers({
  characters,
  currentTurn
})
