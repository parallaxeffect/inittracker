//import {shortid} from 'shortid'
var shortid = require('shortid')

var initialState = {characters: ["Mailee"]}

export var reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {characters: ["Mailee", action.id]}
    default:
      return state
  }
}

export var addCharacter = function () {
  return {type: "ADD_CHARACTER",
          id: shortid.generate()}
}

export var listCharacters = (state) => {
  return { characters: state.characters }
}
