import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginMenu extends Component {
  render() {
    const { username } = this.props;
    return(
        <div className='right' style={{marginRight: '15px'}}>
          {username !== null && (`Welcome, ${username}!`)}
        </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  const username = authedUser
    ? users[authedUser].name
    : null
  return {
    username
  }
}

export default connect(mapStateToProps)(LoginMenu);