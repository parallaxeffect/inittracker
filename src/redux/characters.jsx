import shortid from 'shortid'

var initialState = {characters: ["Mailee"]}

export var reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {characters: [...state.characters, action.character.name]}
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
  return { characters: state.characters }
}
