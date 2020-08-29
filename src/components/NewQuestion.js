import React, { Component } from 'react';
import { Card, Button, TextInput } from 'react-materialize';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  };
  handleTextChange = (event) => {
    const { value, id } = event.target;
    this.setState(() => ({
      [`${id}Text`]: value
    }));
  };
  handleSubmitNewQuestion = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(
      handleAddQuestion(this.state.optionOneText, this.state.optionTwoText)
    );
    this.setState({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    })
  };
  render() {
    const { toHome } = this.state;
    if(toHome === true){
      return <Redirect to='/' />
    }
    return(
      <form action='#' onSubmit={this.handleSubmitNewQuestion}>
        <Card
          actions={[
            <Button
              key='1'
              waves='light'
              type='submit'
              disabled={
                this.state.optionOneText === '' ||
                this.state.optionTwoText === ''
              }
            >
              Submit
            </Button>
          ]}
          title="Create New Question"
        >
          <p>Complete the Question:</p>
          <h6>Would you rather...</h6>
          <TextInput
            id="optionOne"
            placeholder="Enter Option One Here..."
            value={this.state.optionOneText}
            onChange={this.handleTextChange}
          />
          <h6>OR</h6>
          <TextInput
            id="optionTwo"
            placeholder="Enter Option Two Here..."
            value={this.state.optionTwoText}
            onChange={this.handleTextChange}
          />
        </Card>
      </form>
    )
  };
}

export default connect()(NewQuestion);