import axios from 'axios';
import { FETCH_USERS } from 'actions/types';

const apiUrl = process.env.BACKEND_API_URL;

export const fetchUsers = async () => {
  users = await axios.get(apiUrl);

  return {
    type: FETCH_USERS,
    payload: users,
  }
}

