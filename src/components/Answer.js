import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Button } from 'react-materialize';

class Answer extends Component {
  render() {
    console.log(this.props);
    const { user, question } = this.props
    const { avatarURL, name } = user;
    const { id, optionOne, optionTwo } = question;
    return(
      <Card
        horizontal
        header={<CardTitle image={avatarURL} />}
        title={`${name} asks:`}
        actions={[
          <Button
            key={id}
            waves="light"
            onClick={this.handleSubmitAnswer}
          >
            Submit
          </Button>
        ]}
      >
        <form action="#">
          <p>
            <label>
              <input name="option" type="radio" />
              <span>{optionOne.text}</span>
            </label>
          </p>
          <p>OR</p>
          <p>
            <label>
              <input name="option" type="radio" />
              <span>{optionTwo.text}</span>
            </label>
          </p>
        </form>
      </Card>
    )
  }
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