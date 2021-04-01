import './App.css';
import React from "react";
import Rules from './rules.js';
import Game from './Game.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Rules</Link>
            </li>
            <li>
              <Link to="/game">Play the Game</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Rules />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






