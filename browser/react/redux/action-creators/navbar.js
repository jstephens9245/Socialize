import { LOAD_NAVBAR } from '../constants';
import axios form 'axios';

export const loadNavbar = (links) => {
  return {
    type: LOAD_NAVBAR,
    links,
  }
}

export const getNavbarLinks () => {
  return dispatch => {
    axios.get('/api/navbar')
      .then(res => {
        dispatch(loadNavbar(res.data))
      })
  }
}
