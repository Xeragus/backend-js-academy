import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Create from './components/Create'
import Update from './components/Update'
import Home from './components/Home'
import Nav from './components/Nav'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Nav />
        </Grid>
        <Grid item xs={10}>
           <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/create">
                  <Create />
                </Route>
                <Route exact path="/update">
                  <Update />
                </Route>
              </Switch>
            </div>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
