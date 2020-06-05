import React from 'react';
import { Provider } from 'react-redux';
import generateStore from 'reducers';
const store = generateStore();
export default ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}