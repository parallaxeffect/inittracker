import React from 'react'
import shortid from 'shortid'

var d20 = require('d20')

export class DiceRoller extends React.Component {
  constructor () {
    super()
    this.state = {
      roll: "",
      result: "result"
    }
  }
  render() {
    const id = shortid.generate();

    const onChange = (e) => {
      this.setState({
        roll: e.target.value,
        result: this.state.result
      })
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        roll()
      }
    }

    const roll = () => {
      this.setState({
        roll: this.state.roll,
        result: window.d20.roll(this.state.roll)
      })
    }
    return (<div>Dice Roller:
        <input id = {id} onChange={(e)=>onChange(e)}
          onKeyPress = {(e)=>handleKeyPress(e)}/>
        <button onClick={()=>roll()}>Roll</button>
        <span>={this.state.result}</span>
      </div>)
  }
}
