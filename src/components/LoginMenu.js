import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import { logout } from '../actions/authedUser';

class LoginMenu extends Component {
  handleLogout = (event) => {
    const { dispatch } = this.props;
    dispatch(logout());
  };
  render() {
    const { username } = this.props;
    return(
        <div className='right' style={{marginRight: '15px'}}>
          {username !== null && (
            <span>
              {`Welcome, ${username}! `}
              <Button
                key='logout'
                waves="light"
                onClick={this.handleLogout}
              >
                Logout
              </Button>
          </span>
          )}
        </div>
    )
  };
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