import React from 'react'
import {connect} from 'react-redux'
import {nextTurn} from '../redux/characters.jsx'

@connect(
  (state)=>{return state},
  (dispatch)=>{return {nextTurn: ()=>dispatch(nextTurn())}}
)
export class NextTurn extends React.Component {
  render () {
    return (
      <button
        onClick={()=>this.props.nextTurn()}>
        Next Turn
      </button>)
  }
}
