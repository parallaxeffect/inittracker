var initialState = {characters: ["Mailee"]}

export var reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {characters: ["Mailee", "Sazh"]}
    default:
      return state
  }
}

export var addCharacter = function () {
  return {type: "ADD_CHARACTER"}
}
