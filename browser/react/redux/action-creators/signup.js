import { RECEIVE_USER, UPDATE_LOGIN } from '../constants';
import axios from 'axios';
import {receiveUser} from './user'


export const updateState = (field, value) => {
  return {
    type: UPDATE_LOGIN,
    field,
    value
  }
}

export const signUpUser = (user) => {
  return dispatch => {
    axios.post(`/api/users/`, {
        email: user.email,
        password: user.password
    })
      .then(res => {
        dispatch(receiveUser(res.data))
      })
  }
}
