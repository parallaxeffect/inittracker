import React from 'react'
import {connect} from 'react-redux'
import {addCharacter} from '../redux/characters.jsx'

class NewCharacter extends React.Component {
  render () {
    return (
      <button
        onClick={()=>this.props.addCharacter()}>
        Add Character
      </button>)
  }
}

export var CharacterAdd = connect(
  (state)=>{return state},
  (dispatch)=>{return {addCharacter: ()=>{dispatch(addCharacter())}}}
)(NewCharacter);
