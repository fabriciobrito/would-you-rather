import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'react-materialize';
import RankCard from './RankCard';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return(
      <Row>
        {Object.keys(users)
          .sort((a, b) => {
            return(
              Object.keys(users[b].answers).length
              + Object.keys(users[b].questions).length
              - Object.keys(users[a].answers).length
              - Object.keys(users[a].questions).length
            )
          })
          .map((userID, index) => {
            const { avatarURL, name, answers, questions } = users[userID];
            return(
              <Col key={userID} s={12} m={10} l={8} offset='m1 l2'>
                <RankCard
                  avatar={avatarURL}
                  name={name}
                  answers={Object.keys(answers).length}
                  questions={Object.keys(questions).length}
                  position={index + 1}
                />
              </Col>
            )
          })
        }
      </Row>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard);