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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
