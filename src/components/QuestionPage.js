import React, { Component } from 'react';
import { connect } from 'react-redux'
import Result from './Result';
import Answer from './Answer';

class QuestionPage extends Component {
  render() {
    const { id, answered } = this.props;
    return (
      <div>
        {answered
          ? <Result id={id} />
          : <Answer id={id} />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }, props){
  const { id } = props.match.params;
  const answers = Object.keys(users[authedUser].answers);
  return {
    id,
    answered: answers.includes(id)
  }
}
export default connect(mapStateToProps)(QuestionPage);