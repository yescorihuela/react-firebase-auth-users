import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  CLEAR_STATE,
} from 'actions/types';

const initialState = {
  fetching: false,
  users: [],
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      const users = action.payload.map(user => user);
      return { users, fetching: true };
    case FETCH_USERS_SUCCESS:
      return {...state, fetching: false};

    case FETCH_USERS_ERROR:
      return {...state, fetching: false};
    case CLEAR_STATE:
      return {...initialState};
    default:
      return {...initialState};
  }
}

export default users;