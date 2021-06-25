import './App.css';
import Episodes from './Components/episodes.js';
import podcasts from './Components/podcasts.js';
import Following from './Components/following.js';
import { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>PodMyne</h1>
        <ul>
          <li>
          Podcasts
          </li>
          <li>
          Episodes
          </li>
          <li>
          Following
          </li>
        </ul>
    </div>
  );
}

export default App;
