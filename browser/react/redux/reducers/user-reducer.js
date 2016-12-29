import {RECEIVE_USER} from '../constants'

 const initalSignState = {
  user: {

  },
};

export default (state=initalSignState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_USER:
      nextState.user = action.user
      return nextState;
      break;
    default:
      return state

  }
  return nextState;
}
