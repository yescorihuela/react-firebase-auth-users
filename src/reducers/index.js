import { applyMiddleware, combineReducers, createStore } from 'redux';
import usersReducer from 'reducers/users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
  );

  return store;
}