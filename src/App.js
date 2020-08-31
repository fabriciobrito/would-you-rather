import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import { ProgressBar } from 'react-materialize';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import QuestionPage from './components/QuestionPage';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <Menu />
          {authedUser === null
            ? <ProgressBar  />
            : authedUser === ''
              ? <Login />
              : <div className='container'>
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' component={QuestionPage} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
