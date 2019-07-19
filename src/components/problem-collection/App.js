import React from 'react';
import Record from './record-meeting';
import Notes from './meeting-notes';
import Problem from './problem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <center>
        <Router>
          <Switch>
            <Route path="/record/" component={Record} />
            <Route path="/notes/" component={Notes} />
            <Route path="/problem/" component={Problem} />
          </Switch>
        </Router>
      </center>
    </div>
  );
}

export default App;
