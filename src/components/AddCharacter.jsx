import {addCharacter} from '../redux/characters.jsx'

var NewCharacter = React.createClass({
  render: function () {
    return (
      <button
        onClick={()=>this.props.addCharacter()}>
        Add Character
      </button>)
  }
});

export var CharacterAdd = ReactRedux.connect(
  ()=>{},
  (dispatch)=>{return {addCharacter: ()=>{dispatch(addCharacter())}}}
)(NewCharacter);
