import { FETCH_USERS } from 'actions/types';
import axios from 'axios';

export const fetchUsers = () => {
  users = axios.get('');

  return {
    type: FETCH_USERS,
    payload: users,
  }
}

