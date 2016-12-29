import { RECEIVE_USER } from '../constants';
import axios from 'axios';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  }
}
