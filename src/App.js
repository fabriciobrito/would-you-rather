import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import LoadingBar from 'react-redux-loading';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import QuestionPage from './components/QuestionPage';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';

import './App.css';

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <LoadingBar />
        <Menu />
        {authedUser === null
          ? null
          : authedUser === ''
            ? <Login />
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={QuestionPage} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </div>
        }
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
