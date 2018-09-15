import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Hello from './js/component/Hello';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" Component={Hello} />
        </Switch>
      </Router>
    );
  }
}

export default App;
