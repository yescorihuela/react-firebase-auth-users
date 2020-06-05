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
      return { ...state, fetching: true };
    case FETCH_USERS_SUCCESS:
      return {...state, users: action.payload.users, fetching: false};
    case FETCH_USERS_ERROR:
      return {...state, fetching: false, error: action.payload};
    case CLEAR_STATE:
      return initialState;
    default:
      return initialState;
  }
}

export default users;