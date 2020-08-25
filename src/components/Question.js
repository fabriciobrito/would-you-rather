import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Button } from 'react-materialize';
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
  render() {
    console.log(this.props.question);
    const { id, avatar } = this.props.question;
    return(
      <Card
        horizontal
        header={<CardTitle image={avatar} />}
        title='Would You Rather'
        actions={[
          <Button key={id} waves="light">
            View Poll
          </Button>
        ]}
      >
        <div>{this.props.question.optionOne.text} OR ... </div>
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