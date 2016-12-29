import {RECEIVE_ALL_POSTS, INPUT_POST, UPDATE_INPUT_POST} from '../constants';
import axios from 'axios';


export const receivePosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  }
};

export const setStatePostInput = inputValue => {
  return {
    type: UPDATE_INPUT_POST,
    inputValue
  }
}

export const updatePosts = post => {
  return {
    type: INPUT_POST,
    post
  }
}

export const addNewPost = (post) => {
  return dispatch => {
    axios.post(`/api/posts/`, {post})
      .then(res => {
        dispatch(updatePosts(res.data))
      })
  }
}

export const loadAllPosts = () => {
  return dispatch => {
    axios.get('/api/posts')
      .then(res => {
        dispatch(receivePosts(res.data))
      })
  }
}
