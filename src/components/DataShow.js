import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import {
  useUser,
} from 'reactfire';

import Auth from 'components/Auth';

const DataShow = props => {
  const user = useUser();

  const renderData = () => {
    return props.users.map((user, index) => {
      return <li key={index}>{user.name.title} {user.name.first} {user.name.last}</li>
    });
  }

  const fetchUsersWrapper = () => {
    const userToken = user.toJSON()['stsTokenManager']['accessToken'];
    props.fetchUsers(userToken);
  }

  return (
    <div>
      DataTable <br />
      <button onClick={fetchUsersWrapper}>Get data</button>
      <hr />
      <div>
        <ul>
          {renderData()}
        </ul>
      </div>
      <hr />
      <Auth />
    </div>
  );
}

const mapStateToProps = state => {
  return {users: state.users};
}

export default connect(mapStateToProps, actions)(DataShow);