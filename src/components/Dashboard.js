import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-materialize';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <Tabs>
          <Tab title='Unanswered Questions'>Unanswered Questions</Tab>
          <Tab title='Answered Questions'>Answered Questions</Tab>
        </Tabs>
      </div>
    )
  }
}

export default connect()(Dashboard);