import {RECEIVE_ALL_BIOS} from '../constants';
import axios from 'axios';

export const receiveBios = bios => {
  return {
    type: RECEIVE_ALL_BIOS,
    bios
  }
};

export const loadAllBios = () => {
  return dispatch => {
    axios.get('/api/bio/all')
      .then(res => {
        dispatch(receiveBios(res.data))
      })
  }
}
