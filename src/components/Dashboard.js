import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, Row, Col } from 'react-materialize';
import Question from './Question';

class Dashboard extends Component {
  render() {
    const { questionIDs } = this.props;
    return(
      <div>
        <h1>Dashboard</h1>
        <Tabs>
          <Tab title='Unanswered Questions'>
            <Row>
              <Col m={6}>
                {questionIDs.map((questionID) => (
                  <Question key={questionID} question={questionID} />
                ))}
              </Col>
            </Row>
          </Tab>
          <Tab title='Answered Questions'>Answered Questions</Tab>
        </Tabs>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIDs: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(Dashboard);