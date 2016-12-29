import { RECEIVE_ALL_POSTS, INPUT_POST, UPDATE_INPUT_POST} from '../constants';

const initialPostState = {
  inputValue: '',
  posts: [],
}

export default (state=initialPostState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_INPUT_POST:
      nextState.inputValue = action.inputValue;
      console.log(nextState.inputValue);
      return nextState;
      break;
    case INPUT_POST:
    nextState.posts = [...nextState.posts, action.post]
    return nextState;
    case RECEIVE_ALL_POSTS:
    nextState.posts = action.posts
    return nextState;
    default:
      return state;

  }
  return nextState;
}
