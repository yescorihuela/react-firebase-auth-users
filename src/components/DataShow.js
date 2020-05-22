import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class DataShow extends Component {
  renderData = () => {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.name.title} {user.name.first} {user.name.last}</li>
    })
  }

  render() {
    return(
      <div>
        DataTable <br />
        <button onClick={this.props.fetchUsers}>Get data</button>
        <hr />
        <div>
          <ul>
            {this.renderData()}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users: state.users};
}

export default connect(mapStateToProps, actions)(DataShow);