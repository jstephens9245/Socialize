import {RECEIVE_USER, UPDATE_LOGIN_EMAIL, UPDATE_LOGIN_PASSWORD} from '../constants'

 const initalSignState = {
  email: '',
  password: '',
  loginUser: {},
};

export default (state=initalSignState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_USER:
      nextState.loginUser = action.login
      return nextState;
      break;
    case UPDATE_LOGIN_EMAIL:
      nextState.email = action.email;
      return nextState;
      break;
    case UPDATE_LOGIN_PASSWORD:
      nextState.password = action.password;
      return nextState;
      break;
    default:
      return state

  }
  return nextState;
}
