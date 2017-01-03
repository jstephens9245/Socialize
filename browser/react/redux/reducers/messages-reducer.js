import { RECEIVE_ALL_MESSAGES, INPUT_MESSAGE, UPDATE_INPUT_MESSAGE} from '../constants';

const initialMessageState = {
  inputMessValue: '',
  messages: [],
}

export default (state=initialMessageState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      nextState.inputMessValue = action.inputMessValue;
      return nextState;
      break;
    case INPUT_MESSAGE:
      nextState.messages = [...nextState.messages, action.message]
      return nextState;
      break;
    case RECEIVE_ALL_MESSAGES:
      nextState.messages = action.messages;
      return nextState;
      break;
    default:
      return state;

  }
  return nextState;
}
