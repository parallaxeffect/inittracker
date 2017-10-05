import {listCharacters} from '../redux/characters.jsx'
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

export var CharacterList = ReactRedux.connect(
  listCharacters
)(InitiativeList)

var InitiativeRow = React.createClass({
  render: function () {
    return <li>{this.props.character}</li>
  }
});
