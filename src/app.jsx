import {reducer} from './redux/characters.jsx'
import {addCharacter} from './redux/characters.jsx'

import {CharacterList} from './components/CharacterList.jsx'
import {CharacterAdd} from './components/AddCharacter.jsx'

var store = Redux.createStore(reducer)

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Initiative Tracker</h1>
        <CharacterList/>
        <CharacterAdd/>
      </div>
    )
  }
});

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App/>
  </ReactRedux.Provider>,
  document.getElementById('app')
);
