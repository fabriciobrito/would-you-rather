import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import LoadingBar from 'react-redux-loading';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import QuestionPage from './components/QuestionPage';
import NewQuestion from './components/NewQuestion';

import './App.css';

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <Router>
        <LoadingBar />
        <Menu />
        {loading === true
          ? null
          : <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/add' component={NewQuestion} />
            </div>
        }
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
