import React, { Component } from 'react';
import './App.css';
import { getUser, createUser } from './api'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
            {(auth.loggedIn())
            // if logged in
            ? <Switch>
              <Route exact path="/" component={Register} />
              <Route path="/register" component={Register} />
            </Switch>
            // if not logged in (ie Guest User)
            : <Switch>
              <Route exact path="/" component={Register} />
              <Route path="/register" component={Register} />
            </Switch>}
          </Router>
      </div>
    );
  }
}

export default App;
