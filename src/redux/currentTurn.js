

export var currentTurn = (state = "", action) => {
  switch (action.type) {

  case 'SET_TURN':
    return action.id
  default:
    return state
  }
}
