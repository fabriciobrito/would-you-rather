import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import OptionResultCard from './OptionResultCard'

class Result extends Component {
  render() {
    const { avatar, name, optionOne, optionTwo, answer } = this.props;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length
    return(
      <Card
        horizontal
        header={<CardTitle image={avatar} />}
        title={`${name} asks:`}
      >
        <h6>Would You Rather...</h6>
        <OptionResultCard
          text={optionOne.text}
          votes={optionOne.votes.length}
          total={totalVotes}
          voted={answer === 'optionOne'}
        />
        <OptionResultCard
          text={optionTwo.text}
          votes={optionTwo.votes.length}
          total={totalVotes}
          voted={answer === 'optionTwo'}
        />
      </Card>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props; // Question ID
  const question = questions[id];
  const user = users[authedUser];
  return {
    ...question,
    answer: user.answers[id],
    avatar: users[question.author].avatarURL,
    name: user.name
  }
}

export default connect(mapStateToProps)(Result);