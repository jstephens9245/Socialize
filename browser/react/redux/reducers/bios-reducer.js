import {RECEIVE_ALL_BIOS} from '../constants'

 const initailBioState = {
  bios: []
};

export default (state=initailBioState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_BIOS:
      nextState.bios = action.bios
      return nextState;
      break;
    default:
      return state;

  }
  return nextState;
}
