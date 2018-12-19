import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Game from './components/game'
import Home from './components/home'
import Leaderboard from './components/leaderboard'

class App extends Component {
  render() {
    return (
      <>
      <Router> 
        <div>
          <Route exact path='/' component = {Home}/>
          <Route path='game' component= {Game}/>
          <Route path='leaderboard' component={Leaderboard} />
        </div>
      </Router>
      </>
    );
  }
}

export default App;
