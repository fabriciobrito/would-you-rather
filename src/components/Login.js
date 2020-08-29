import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Select } from 'react-materialize';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    user: ''
  };
  handleChangeUser = (event) => {
    this.setState({
      user: event.target.value
    })
  };
  handleLogin = (event) => {
    const { dispatch } = this.props;
    dispatch( setAuthedUser(this.state.user) );
  };
  render() {
    const { users } = this.props;
    return(
      <Card
        actions={[
          <Button
            key='login'
            waves="light"
            onClick={this.handleLogin}
            disabled={this.state.user === ''}
          >
            Login
          </Button>
        ]}
        title="Welcome to the Would You Rather App!"
      >
        <p>Please sign in to play</p>
        <Select
          multiple={false}
          onChange={this.handleChangeUser}
          options={{
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: false,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value={this.state.user}
        >
          <option
            disabled
            value=""
          >
            Select User
          </option>
          {Object.keys(users).map((userID) => {
            const { name, avatarURL } = users[userID];
            return(
              <option key={userID} value={userID} data-icon={avatarURL}>
                {name}
              </option>
            )
          })}
        </Select>
    </Card>
    )
  };
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login);