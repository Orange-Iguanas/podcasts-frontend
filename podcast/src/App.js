import './App.css';
import Episodes from './Components/episodes.js';
import podcasts from './Components/podcasts.js';
import Following from './Components/following.js';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>PodMine</h1>
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
