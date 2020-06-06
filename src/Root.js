import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import generateStore from 'reducers';
const store = generateStore();
export default ({children}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}