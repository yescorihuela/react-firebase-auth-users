import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class DataShow extends Component {
  render() {
    return(
      <div>
        DataTable
      </div>
    );
  }
}

export default connect(null, actions)(DataShow);