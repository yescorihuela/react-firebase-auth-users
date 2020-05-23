import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../styles/index.css';
import {
  Button,
  Tooltip
} from 'antd';
import { LockOutlined } from '@ant-design/icons';
import 'firebase/auth';
import {
  useFirebaseApp,
  useUser,
} from 'reactfire';

import * as actions from 'actions';

const Auth = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const user = useUser();

  const firebase = useFirebaseApp();

  const signUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  const logIn = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  const logOut = async () => {
    props.clearState();
    await firebase.auth().signOut();
  }

  return(
    <span>
      { !user &&
        <div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" onChange={ (e) => setEmail(e.target.value) }/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" onChange={ (e) => setPassword(e.target.value) }/>
          </div>
          <div>
            <button onClick={signUp}>Sign Up</button>
            <button onClick={logIn}>Login</button>
          </div>
        </div>
      }
      {
        user && <Button type="danger" icon={<LockOutlined />} onClick={logOut}>Logout</Button>
      }
    </span>
  )

}

export default connect(null, actions)(Auth);