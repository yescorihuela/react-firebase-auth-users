import axios from 'config';
import { FETCH_USERS } from 'actions/types';

const apiUrl = process.env.REACT_APP_DATA_ENDPOINT;

export const fetchUsers = async () => {

  const users = await axios.get(apiUrl, {
    'headers': {
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InloZXIxMzZAZ21haWwuY29tIiwiZXhwIjoxNTkwMjUxNzg3fQ.2QQjsKXK6JiZmtnk0wiegVmg2hGNyWDpYhlcQE3hT_k'
    }
  });
  return {
    type: FETCH_USERS,
    payload: users,
  }
}

