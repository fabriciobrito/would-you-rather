import React, { Component } from 'react';
import { connect } from 'react-redux';
import RankCard from './RankCard';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return(
      <div>
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
            const user = users[userID];
            return(
              <RankCard
                key={userID}
                avatar={user.avatarURL}
                name={user.name}
                answers={Object.keys(user.answers).length}
                questions={Object.keys(user.questions).length}
                position={index + 1}
              />
            )
          })}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard);