import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';

import App from './components/App';
import firebaseConfig from './config/firebaseConfig';

import {
  FirebaseAppProvider
} from 'reactfire';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Cargando'}>
      <Root>
        <App />
      </Root>
    </Suspense>
  </FirebaseAppProvider>,
  document.querySelector('#root'),
);