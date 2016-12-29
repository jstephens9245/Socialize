import {SIGN_UP, UPDATE_LOGIN} from '../constants'

const initalLoginState = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default (state=initalLoginState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case SIGN_UP:
      nextState.navbarLinks = action.links
      return nextState;
      break;
    case UPDATE_LOGIN:
      nextState[action.field] = action.value;
      return nextState;
      break;
    default:
      return state

  }
  return nextState;
}
