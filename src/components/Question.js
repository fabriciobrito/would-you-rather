import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-materialize';

class Question extends Component {
  render() {
    return(
      <Card
        actions={[
          <a key="1" href="#">View Poll</a>
        ]}
        horizontal
      >
        {this.props.question}
      </Card>
    )
  }
}

export default connect()(Question);