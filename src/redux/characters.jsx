import shortid from 'shortid'

var initialState = {
  allIds: [],
}

export var characters = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        [action.id]: action.character,
        allIds: [...state.allIds, action.id],
      }
    case 'EDIT_CHARACTER_FIELD':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.field]: action.value
        }
      }
    case 'REMOVE_CHARACTER':
      console.log('remove character', action.id)
      return {
        ...state,
        [action.id]: undefined,
        allIds: state.allIds.filter(id => {return id !== action.id})
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

export var removeCharacter = function(id) {
  return {
    type: "REMOVE_CHARACTER",
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
