import {
  FETCH_USERS,
  CLEAR_STATE,
} from 'actions/types';

const users = (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS:
      const users = action.payload.map(user => user);
      return [...users];
    case CLEAR_STATE:
      return [];
    default:
      return state;
  }
}

export default users;