import axios from 'config';
import {
  FETCH_USERS,
  CLEAR_STATE,
} from 'actions/types';

const apiUrl = process.env.REACT_APP_DATA_ENDPOINT;

export const fetchUsers = async userToken => {
  const random = parseInt(Math.random() * 123456789)
  const response = await axios.get(`${apiUrl}?r=${random}`, {
    'headers': {
      'Authorization': userToken,
    }
  });
  return {
    type: FETCH_USERS,
    payload: response,
  }

}

export const clearState = () => {
  return {
    type: CLEAR_STATE,
    payload: null,
  }
}

