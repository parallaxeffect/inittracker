import {reducer} from './redux/characters.jsx'
import {addCharacter} from './redux/characters.jsx'

console.log('app.jsx')

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

var NewCharacter = React.createClass({
  render: function () {
    return (
      <button
        onClick={()=>this.props.addCharacter()}>
        Add Character
      </button>)
  }
});

var CharacterAdd = ReactRedux.connect(
  ()=>{},
  (dispatch)=>{return {addCharacter: ()=>{dispatch(addCharacter())}}}
)(NewCharacter);

var InitiativeList = React.createClass({
  render: function () {
    var characters = this.props.characters
    return (
      <ul>
        {characters.map(character => (
          <InitiativeRow key={character} character={character}/>
        ))}
      </ul>
    )
  }
});

var CharacterList = ReactRedux.connect(
  state => {
    return { characters: state.characters }
  }
)(InitiativeList)

var InitiativeRow = React.createClass({
  render: function () {
    return <li>{this.props.character}</li>
  }
});

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App/>
  </ReactRedux.Provider>,
  document.getElementById('app')
);
