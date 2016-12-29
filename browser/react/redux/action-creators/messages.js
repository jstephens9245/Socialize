import {RECEIVE_ALL_MESSAGES, INPUT_MESSAGE, UPDATE_INPUT_MESSAGE} from '../constants';
import axios from 'axios';


export const receiveMessages = messages => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  }
};

export const setStateMessageInput = inputMessValue => {
  return {
    type: UPDATE_INPUT_MESSAGE,
    inputMessValue
  }
}

export const updateMessages = message => {
  return {
    type: INPUT_MESSAGE,
    message
  }
}

export const addNewMessage = (message) => {
  return dispatch => {
    axios.post(`/api/messages/`, {message})
      .then(res => {
        dispatch(updateMessages(res.data))
      })
  }
}

export const loadAllMessages = () => {
  return dispatch => {
    axios.get('/api/messages')
      .then(res => {
        dispatch(receiveMessages(res.data))
      })
  }
}
