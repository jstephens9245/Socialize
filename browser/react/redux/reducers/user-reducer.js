import {RECEIVE_USER, RECEIVE_MUTUAL} from '../constants'

 const initalSignState = {
  user: {},
  mutualFriends: []
};

export default (state=initalSignState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_USER:
      nextState.user = action.user
      return nextState;
      break;
    case RECEIVE_MUTUAL:
      nextState.mutualFriends = action.mutual
      return nextState;
      break;
    default:
      return state

  }
  return nextState;
}
