import React from 'react'
import {connect} from 'react-redux'

import {listCharacters} from '../redux/characters.jsx'

class InitiativeList extends React.Component {
  render() {
    var characters = this.props.characters
    return (
      <ul>
        {characters.map(character => (
          <InitiativeRow key={character.id} character={character.name}/>
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
