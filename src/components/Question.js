import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, Button } from 'react-materialize';
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
  handleClickViewPoll = (event) => {
    event.preventDefault();
    const { id } = this.props;
    this.props.history.push(`/questions/${id}`)
  }
  render() {
    const { id, avatar, name, optionOne } = this.props.question;
    return(
      <Card
        horizontal
        header={<CardTitle image={avatar} />}
        title={`${name} asks:`}
        actions={[
          <Button
            key={id}
            waves="light"
            onClick={this.handleClickViewPoll}
          >
            View Poll
          </Button>
        ]}
      >
        <h6>Would You Rather</h6>
        <div>{optionOne.text} OR ... </div>
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

export default withRouter(connect(mapStateToProps)(Question));