import React from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';

//imports
import Players from './components/players';
import {PlayerInfo} from './components/playerInfo';
import {Highlights} from './components/highlights';
import {PlayerCard} from './components/playerCard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Soccer Fever</h1>
        <div className="nav-links">
          <NavLink to="/">Goalden Ladies</NavLink>
          <NavLink to="/highlights">Soccer Highlights</NavLink>
        </div>
      </nav>
      <Route exact path="/">
        
        <header className="App-header">
          <h1>
            <span>⚽⚽⚽⚽⚽</span>Women's World Cup!!!!!!{" "}
            <span>⚽⚽⚽⚽⚽</span>{" "}
          </h1>
        </header>
        <Players />
      </Route>
      <Route path="/players/:id">
        <div className="I-Info">
          <PlayerCard />
        </div>
      </Route>
      <Route path="/highlights">
        <Highlights />
      </Route>
    </div>
  );
}

export default App;
