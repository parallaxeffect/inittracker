import React from 'react'
import {connect} from 'react-redux'
import {setTurn, getNextTurn} from '../redux/characters.jsx'

@connect(
  (state)=>{return {next: getNextTurn(state)}},
  (dispatch)=>{return {setTurn: (next)=>dispatch(setTurn(next))}}
)
export class NextTurn extends React.Component {
  render () {
    var {setTurn, next} = this.props
    return (
      <button
        onClick={()=>setTurn(next)}>
        Next Turn
      </button>)
  }
}
