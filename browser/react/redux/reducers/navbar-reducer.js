import { LOAD_NAVBAR } from '../constants'

const initalNavState = {
  navbarLinks: []
};

export default (state=initalNavState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case 'LOAD_NAVBAR':
      nextState.navbarLinks = action.links
      return nextState;
      break;
    default:
      return state

  }
  return nextState;
}
