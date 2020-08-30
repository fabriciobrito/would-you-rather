import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button} from 'react-materialize';
import { logout } from '../actions/authedUser';

class LoginMenu extends Component {
  handleLogout = (event) => {
    const { dispatch } = this.props;
    dispatch(logout());
  };
  render() {
    const { user } = this.props;
    return(
        <div className='right' style={{marginRight: '15px'}}>
          {user !== null && (
            <span>
              {`Welcome, ${user.name}! `}
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
  const user = authedUser === null || authedUser === ''
    ? null
    : users[authedUser]
  return {
    user
  }
}

export default connect(mapStateToProps)(LoginMenu);