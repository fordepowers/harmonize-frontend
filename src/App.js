import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home/Home';
import CreatePoll from './views/CreatePoll/CreatePoll';
import AnswerPoll from './views/AnswerPoll/AnswerPoll';
import Overview from './views/Overview/Overview';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreatePoll />
          </Route>
          <Route path="/answer">
            <AnswerPoll />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
