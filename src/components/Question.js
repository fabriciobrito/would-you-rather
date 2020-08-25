import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-materialize';
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
  render() {
    console.log(this.props.question);
    return(
      <Card
        actions={[
          <button key="1">View Poll</button>
        ]}
        horizontal
      >
        {this.props.question.id}
      </Card>
    )
  }
}

function mapStateToProps({ authedUser, questions, users}, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(Question);