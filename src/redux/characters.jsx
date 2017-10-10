import shortid from 'shortid'

var initialState = {
  characters: {
    allIds: [],
  },
  currentTurn: ""
}

export var reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.id]: action.character,
          allIds: [...state.characters.allIds, action.id],
        }
      }
    case 'EDIT_CHARACTER_FIELD':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.id]: {
            ...state.characters[action.id],
            [action.field]: action.value
          }
        }
      }
    case 'SET_TURN':
      return {
        ...state,
        currentTurn: action.id
      }
    default:
      return state
  }
}

// Action Generators
export var addCharacter = function () {
  var id = shortid.generate()
  return {
    type: "ADD_CHARACTER",
    id,
    character: {
      id,
      name: ""
    }
  }
}

export var editCharacterField = function(id, field, value) {
  return {
    type: "EDIT_CHARACTER_FIELD",
    id,
    field,
    value
  }
}

export var setTurn = function(id) {
  return {
    type: "SET_TURN",
    id
  }
}

// Selectors
export var listCharacters = (state) => {
  return state.characters.allIds.map(
    (id) => { return state.characters[id] }
  )
}

export var listCharactersByFieldNumeric = (state, field) => {
  return listCharacters(state).sort(
    (a,b) => { return a[field] - b[field] }
  )
}

export var currentTurn = (state) => {
  return state.currentTurn;
}

export var getNextTurn = (state) => {
  var characters = listCharactersByFieldNumeric(state, "init")
  if (characters.length == 0) {
    return ""
  }
  var next = characters[characters.length-1].id
  for (var i=0; i<characters.length; i++) {
    if (characters[i].id == currentTurn(state)) {
      return next
    }
    next = characters[i].id
  }
  return next
}
