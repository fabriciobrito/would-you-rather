import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Button, Row, Col } from 'react-materialize';
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
            <div key={id} className='center-align'>
              <Button
                waves="light"
                type="submit"
                disabled={this.state.selectedAnswer === ''}
              >
                Submit
              </Button>
            </div>
          ]}
        >
          <Row>
            <Col s={12}>
              <label>
                <input
                  type="radio"
                  value='optionOne'
                  checked={this.state.selectedAnswer === 'optionOne'}
                  onChange={this.handleChangeOption}
                />
                <span>{optionOne.text}</span>
              </label>
            </Col>
            <Col s={12} className='center-align'>
              OR
            </Col>
            <Col s={12}>
              <label>
                <input
                  type="radio"
                  value='optionTwo'
                  checked={this.state.selectedAnswer === 'optionTwo'}
                  onChange={this.handleChangeOption}
                />
                <span>{optionTwo.text}</span>
              </label>
            </Col>
          </Row>
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