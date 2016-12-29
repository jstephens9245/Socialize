import { UPDATE_LOGIN_EMAIL, UPDATE_LOGIN_PASSWORD } from '../constants';
import axios from 'axios';
import {receiveUser} from './user'

export const updateLoginEmail = (email) => {
  return {
    type: UPDATE_LOGIN_EMAIL,
    email,
  }
}
export const updateLoginPassword = (password) => {
  return {
    type: UPDATE_LOGIN_PASSWORD,
    password,
  }
}

export const getUser = (user) => {
  return dispatch => {
    axios.post(`/api/sessions/`, {
        email: user.email,
        password: user.password
    })
      .then(res => {
        dispatch(receiveUser(res.data))
      })
  }
}
