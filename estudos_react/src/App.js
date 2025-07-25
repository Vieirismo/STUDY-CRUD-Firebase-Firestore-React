import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { setPlansAction, addPlansAction, updatePlansAction, getPlansAction } from './services/actions/plans_actions';
import { getPlansObserver } from './services/observers/plansObserver';

function App() {
  useEffect(()=>{
    getPlansObserver();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
