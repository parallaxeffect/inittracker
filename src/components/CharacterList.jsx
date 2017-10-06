import React from 'react'
import {connect} from 'react-redux'

import {listCharacters} from '../redux/characters.jsx'

class InitiativeList extends React.Component {
  render() {
    var characters = this.props.characters
    return (
      <table><tbody>
        {characters.map(character => (
          <InitiativeRow key={character.id} character={character}/>
        ))}
      </tbody></table>
    )
  }
}

export var CharacterList = connect(
  listCharacters
)(InitiativeList)

var InitiativeRow =  function (props) {
  var {character} = props
  var stat = "name"
  return <tr><InitiativeStat character={character} stat={stat}/></tr>
}

var InitiativeStat = function (props) {
  var {character, stat} = props
  return <td>{character[stat]}</td>
}
