import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Navbar from './components/Navbar'

class App extends Component {
 

  render() {
    return (
      <>
      <Router> 
        <div>
          <Navbar/>
          <Route exact path='/' component = {Home}/>
          <Route path='/Game' component= {Game}/>
          <Route path='/Leaderboard' component={Leaderboard} />
        </div>
      </Router>
      </>
    );
  }
}

export default App;
