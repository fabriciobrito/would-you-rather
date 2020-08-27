import React, { Component } from 'react';
import { Card, Button, TextInput } from 'react-materialize';

class NewQuestion extends Component {
  render() {
    return(
      <Card
        actions={[<Button key='1' waves='light'>Submit</Button>]}
        title="Create New Question"
      >
      <p>Complete the Question:</p>
      <h6>Would you rather...</h6>
      <TextInput
        id="optionOne"
        placeholder="Enter Option One Here..."
      />
      <h6>OR</h6>
      <TextInput
        id="optionTwo"
        placeholder="Enter Option Two Here..."
      />
    </Card>
    )
  }
}

export default NewQuestion;