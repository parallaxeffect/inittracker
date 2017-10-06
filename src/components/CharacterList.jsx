console.log('character begin')

import React from 'react'
import {connect} from 'react-redux'

console.log('character import react')

import {listCharacters} from '../redux/characters.jsx'

console.log('import listcha')


class InitiativeList extends React.Component {
  render() {
    var characters = this.props.characters
    return (
      <ul>
        {characters.map(character => (
          <InitiativeRow key={character} character={character}/>
        ))}
      </ul>
    )
  }
}


export var CharacterList = connect(
  listCharacters
)(InitiativeList)

var InitiativeRow =  function (props) {
    return <li>{props.character}</li>
  }
