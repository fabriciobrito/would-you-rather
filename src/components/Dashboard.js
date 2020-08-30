import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-materialize';
import { Link } from 'react-router-dom';
import Teaser from './Teaser';

class Dashboard extends Component {
  render() {
    const { answeredIDs, unAnsweredIDs } = this.props;
    return(
      <Tabs className='center-align'>
        <Tab active title='Unanswered Questions'>
          {unAnsweredIDs.length === 0 && (
            <span className="center-align">
              <h5>
                All the available Questions was already answered!
              </h5>
              <p>You can create new questions <Link to='/add'>HERE</Link>.</p>
            </span>
          )}
          {unAnsweredIDs.map((questionID) => (
            <Teaser key={questionID} id={questionID} />
          ))}
        </Tab>
        <Tab title='Answered Questions'>
          {answeredIDs.map((questionID) => (
            <Teaser key={questionID} id={questionID} />
          ))}
        </Tab>
      </Tabs>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const answeredIDs = Object.keys(users[authedUser].answers)
    .sort(sortQuestions);
  const unAnsweredIDs = Object.keys(questions)
    .filter((id) => (!answeredIDs.includes(id)))
    .sort(sortQuestions);
  function sortQuestions(a,b) {
    return questions[b].timestamp - questions[a].timestamp
  }
  return {
    answeredIDs,
    unAnsweredIDs
  }
}

export default connect(mapStateToProps)(Dashboard);