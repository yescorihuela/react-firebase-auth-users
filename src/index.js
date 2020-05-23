import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.css';
import { Layout } from 'antd';

import Root from 'Root';
import App from './components/App';
import firebaseConfig from './config/firebaseConfig';

import {
  FirebaseAppProvider
} from 'reactfire';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: 'white' }} >
      Hola soy Yrvin
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: '87vh' }}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={'Cargando'}>
          <Root>
            <App />
          </Root>
        </Suspense>
      </FirebaseAppProvider>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,
  document.querySelector('#root'),
);

