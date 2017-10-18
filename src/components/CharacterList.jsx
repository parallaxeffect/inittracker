import React from 'react'
import {connect} from 'react-redux'

import {
  listCharactersByFieldNumeric,
  editCharacterField,
  removeCharacter
} from '../redux/characters.jsx'

class InitiativeList extends React.Component {
  render() {
    var {characters, currentTurn} = this.props
    var stats = ["name", "init", "hp", "ac", "notes"]

    return (
      <table>
        <thead><InitiativeHeader stats={stats}/></thead>
        <tbody>
        {characters.map(character => {
          var className = currentTurn == character.id ? " current " : ""
          return <InitiativeRow key={character.id} character={character} stats={stats} className={className}/>
        })}
      </tbody></table>
    )
  }
}

export var CharacterList = connect(
  (state) => ({
    characters: listCharactersByFieldNumeric(state, "init").reverse(),
    currentTurn: state.currentTurn
  })
)(InitiativeList)

@connect(
  (state) => {return state},
  (dispatch) => {return {remove: (character) => {dispatch(removeCharacter(character))}}}
)
class DeleteButton extends React.Component {
  delete(character) {
    console.log("deleted", character)
  }
  render() {
    const {character} = this.props
    return <td><button onClick = {() => this.props.remove(character.id)}>del</button></td>
  }
}

var InitiativeHeader = function (props) {
  return (<tr>
    { props.stats.map( stat => (<td key={stat}>{stat}</td>) ) }
  </tr>)
}

var InitiativeRow =  function (props) {
  var {character, stats, className} = props
  return (<tr className={className}>
      {
        stats.map(stat => (
          <InitiativeStat key={stat} character={character} stat={stat}/>
          ))
      }
      <DeleteButton character={character}/>
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
