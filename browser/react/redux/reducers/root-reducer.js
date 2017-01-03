import {combineReducers} from 'redux';
import navbarReducer from './navbar-reducer'
import loginReducer from './login-reducer'
import signupReducer from './signup-reducer'
import postsReducer from './posts-reducer'
import userReducer from './user-reducer'
import messagesReducer from './messages-reducer'
import biosReducer from './bios-reducer'


export default combineReducers({
  navbar: navbarReducer,
  login: loginReducer,
  signup: signupReducer,
  posts: postsReducer,
  user: userReducer,
  messages: messagesReducer,
  bios: biosReducer,
});
