import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Dashboard />
    );
  }
}

export default connect()(App);
