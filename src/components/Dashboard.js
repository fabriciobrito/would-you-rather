import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, Row, Col } from 'react-materialize';
import Teaser from './Teaser';

class Dashboard extends Component {
  render() {
    const { answeredIDs, unAnsweredIDs } = this.props;
    return(
      <div>
        <Tabs>
          <Tab active title='Unanswered Questions'>
            <Row>
              <Col m={6}>
                {unAnsweredIDs.map((questionID) => (
                  <Teaser key={questionID} id={questionID} />
                ))}
              </Col>
            </Row>
          </Tab>
          <Tab title='Answered Questions'>
            <Row>
              <Col m={6}>
                {answeredIDs.map((questionID) => (
                  <Teaser key={questionID} id={questionID} />
                ))}
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const answeredIDs = Object.keys(users[authedUser].answers);
  const unAnsweredIDs = Object.keys(questions).sort((a,b) => (
    questions[b].timestamp - questions[a].timestamp
  ))
    .filter((id) => (!answeredIDs.includes(id)));
  return {
    answeredIDs,
    unAnsweredIDs
  }
}

export default connect(mapStateToProps)(Dashboard);