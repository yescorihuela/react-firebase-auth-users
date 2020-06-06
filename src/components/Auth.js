import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css';
import '../styles/index.css';
import {
  Form,
  Input,
  Button
} from 'antd';
import {
  LockOutlined,
  UnlockOutlined
} from '@ant-design/icons';
import 'firebase/auth';
import {
  useFirebaseApp,
  useUser,
} from 'reactfire';

import * as actions from 'actions';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const Auth = (props) => {

  const user = useUser();
  const history = useHistory();
  const firebase = useFirebaseApp();

  useEffect(() => {
    if(user) history.push('/datashow');
  })

  const logIn = async formValues => {
    
    await firebase.auth().signInWithEmailAndPassword(
      formValues.email,
      formValues.password
    );
  }

  const logOut = async () => {
    props.clearState();
    await firebase.auth().signOut();
    history.push('/login');
  }

  return(
    <span>
      { !user &&
        <Form
          {...layout}
          name="basic"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={logIn}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" icon={<UnlockOutlined />}>
              Login
            </Button>
          </Form.Item>
        </Form>
      }
      {
        user && <Button type="danger" icon={<LockOutlined />} onClick={logOut}>Logout</Button>
      }
    </span>
  )

}

export default connect(null, actions)(Auth);