import { RECEIVE_USER, RECEIVE_MUTUAL } from '../constants';
import axios from 'axios';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  }
}

export const receiveMutualFriends = (mutual) => {
  return {
    type: RECEIVE_MUTUAL,
    mutual,
  }
}

export const getMutualById = id => {
  console.log(id);
  return dispatch => {

    axios.get(`/api/friends/${id}`)
      .then(response => {
        console.log(response.data);
        dispatch(receiveMutualFriends(response.data));
      });
  };
};
