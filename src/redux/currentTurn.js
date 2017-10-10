import {listCharactersByFieldNumeric} from './characters.jsx'

export var currentTurn = (state = "", action) => {
  switch (action.type) {

  case 'SET_TURN':
    return action.id
  default:
    return state
  }
}


export var setTurn = function(id) {
  return {
    type: "SET_TURN",
    id
  }
}

export var getNextTurn = (state) => {
  var characters = listCharactersByFieldNumeric(state, "init")
  if (characters.length == 0) {
    return ""
  }
  var next = characters[characters.length-1].id
  for (var i=0; i<characters.length; i++) {
    if (characters[i].id == state.currentTurn) {
      return next
    }
    next = characters[i].id
  }
  return next
}
