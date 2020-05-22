import { FETCH_USERS } from 'actions/types';

const users = (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS:
      const users = action.payload.data.map(user => user);
      return [...users];
    default:
      return state;
  }
}

export default users;