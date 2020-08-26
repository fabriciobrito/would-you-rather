import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question';

class QuestionPage extends Component {
  render() {
    const { id } = this.props;
    console.log(this.props)
    return (
      <div>
        <Question id={id} />
      </div>
    )
  }
}

function mapStateToProps({questions}, props){
  const { id } = props.match.params;
  const question = questions[id];
  console.log(id, question);
  return {
    id,
    ...question
  }
}
export default connect(mapStateToProps)(QuestionPage);