import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Button } from 'react-materialize';
import { handleAnswerQuestion } from '../actions/questions'

class Answer extends Component {
  state = {
    selectedAnswer: ''
  };
  handleChangeOption = (event) => {
    this.setState({
      selectedAnswer: event.target.value
    })
  };
  handleSubmitAnswer = (event) => {
    event.preventDefault();
    const { dispatch, id } = this.props;
    dispatch( handleAnswerQuestion(id, this.state.selectedAnswer) );
  };
  render() {
    const { user, question, id } = this.props
    const { avatarURL, name } = user;
    const { optionOne, optionTwo } = question;
    return(
      <form action="#" onSubmit={this.handleSubmitAnswer}>
        <Card
          horizontal
          header={<CardTitle image={avatarURL} />}
          title={`${name} asks:`}
          actions={[
            <Button
              key={id}
              waves="light"
              type="submit"
              disabled={this.state.selectedAnswer === ''}
            >
              Submit
            </Button>
          ]}
        >
          <p>
            <label>
              <input
                type="radio"
                value='optionOne'
                checked={this.state.selectedAnswer === 'optionOne'}
                onChange={this.handleChangeOption}
              />
              <span>{optionOne.text}</span>
            </label>
          </p>
          <p>OR</p>
          <label>
            <input
              type="radio"
              value='optionTwo'
              checked={this.state.selectedAnswer === 'optionTwo'}
              onChange={this.handleChangeOption}
            />
              <span>{optionTwo.text}</span>
          </label>
        </Card>
      </form>
    )
  };
}

function mapStateToProps({users, questions }, props) {
  const { id } = props;
  const question = questions[id];
  return {
    user: users[question.author],
    question
  }
}

export default connect(mapStateToProps)(Answer);