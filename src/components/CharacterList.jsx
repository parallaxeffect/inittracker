import React from 'react'
import {connect} from 'react-redux'

import {listCharacters, editCharacterField} from '../redux/characters.jsx'

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

@connect(
  ()=>{ return {} },
  (dispatch)=>{
    return {
      updateFieldValue:(id, field, value) =>
        dispatch(editCharacterField(id, field, value))
    }
  }
)
class InitiativeStat extends React.Component{
  onValueChanged(e) {
    var {character, stat, updateFieldValue} = this.props
    var {id} = character
    var value = e.target.value
    console.log(id, stat, value)
    updateFieldValue(id, stat, value)
  }

  render() {
    var {character, stat} = this.props
    return <td><input
      value={character[stat] || ""}
      onChange={this.onValueChanged.bind(this)}/>
    </td>
  }
}
