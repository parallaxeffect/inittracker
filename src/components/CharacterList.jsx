import React from 'react'
import {connect} from 'react-redux'

import {listCharacters} from '../redux/characters.jsx'

class InitiativeList extends React.Component {
  render() {
    var characters = this.props.characters
    var stats = ["name", "init"]

    return (
      <table>
        <thead><InitiativeHeader stats={stats}/></thead>
        <tbody>
        {characters.map(character => (
          <InitiativeRow key={character.id} character={character} stats={stats}/>
        ))}
      </tbody></table>
    )
  }
}

export var CharacterList = connect(
  listCharacters
)(InitiativeList)

var InitiativeHeader = function (props) {
  return (<tr>
    { props.stats.map( stat => (<td key={stat}>{stat}</td>) ) }
  </tr>)
}

var InitiativeRow =  function (props) {
  var {character, stats} = props
  return (<tr>
      {
        stats.map(stat => (
          <InitiativeStat key={stat} character={character} stat={stat}/>
          ))
      }
    </tr>)
}

var InitiativeStat = function (props) {
  var {character, stat} = props
  return <td>{character[stat]}</td>
}
