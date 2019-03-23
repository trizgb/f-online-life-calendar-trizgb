import React, { Component } from 'react';
import Main from './components/Main';
import Edit from './components/Edit';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header"></header>
        <Switch>
          <Route exact path="/" render={() => (
            <Main />
          )} />
          <Route path="/edit" render={() => (
            <Edit />
          )} />
        </Switch>
        <footer className="app__footer"></footer>
      </div>
    );
  }
}

export default App;
