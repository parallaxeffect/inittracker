import React from 'react'
import {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'

import {reducer} from './redux/index.js'
import {addCharacter} from './redux/characters.jsx'

import {CharacterList} from './components/CharacterList.jsx'
import {CharacterAdd} from './components/AddCharacter.jsx'
import {NextTurn} from './components/NextTurn.jsx'
import {DiceRoller} from './components/DiceRoller.jsx'

var store = createStore(reducer)
window.store = store

class App extends Component  {
  render() {
    return (
      <div>
        <h1>Initiative Tracker</h1>
        <CharacterList/>
        <CharacterAdd/>
        <NextTurn/>
        <DiceRoller/>
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
