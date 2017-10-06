import shortid from 'shortid'

var initialState = {
  characters: {
    allIds: ["first"],
    first: {id:"first", name:"Mailee"}
  }
}

export var reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: {
          ...state.characters,
          allIds: [...state.characters.allIds, action.id],
          [action.id]: action.character
        }
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
      name: "New character"
    }
  }
}

// Selectors
export var listCharacters = (state) => {
  return { characters: state.characters.allIds.map(
    (id) => { return state.characters[id] }
  ) }
}
