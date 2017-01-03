import { RECEIVE_ALL_POSTS, RECEIVE_POST, INPUT_POST, UPDATE_INPUT_POST} from '../constants';

const initialPostState = {
  inputValue: '',
  posts: [],
  selected: {},
}


export default (state=initialPostState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_INPUT_POST:
      nextState.inputValue = action.inputValue;
      return nextState;
      break;
    case INPUT_POST:
      nextState.posts = [...nextState.posts, action.post]
      return nextState;
      break;
    case RECEIVE_ALL_POSTS:
      nextState.posts = action.posts
      return nextState;
      break;
    case RECEIVE_POST:
      nextState.selected = action.post;
      break;
    default:
      return state;

  }
  return nextState;
}
