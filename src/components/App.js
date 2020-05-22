import React, { Component } from 'react';
import DataShow from 'components/DataShow';

class App extends Component {
  fetchNewRandomUsersData = (e) => {
    console.log(e)
  }
  render() {
    return(
      <div>
        <DataShow />
        Random users app
        <button onClick={(e) => { this.fetchNewRandomUsersData(e) }}>Get random users data</button>
      </div>
    )
  }
}

export default App;