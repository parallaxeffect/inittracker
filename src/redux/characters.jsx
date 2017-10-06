//import {shortid} from 'shortid'
//var shortid = require('shortid')

import shortid from 'shortid'
console.log('shortid')
var initialState = {characters: ["Mailee"]}

export var reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {characters: ["Mailee", action.name]}
    default:
      return state
  }
}

// Action Generators
export var addCharacter = function () {
  return {
    type: "ADD_CHARACTER",
    id: shortid.generate(),
    name: "new character"
  }
}

// Selectors
export var listCharacters = (state) => {
  return { characters: state.characters }
}
