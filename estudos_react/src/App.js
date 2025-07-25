import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { setPlansAction, addPlansAction, updatePlansAction, getPlansAction } from './services/actions/plans_actions';
import { getPlansObserver } from './services/observers/plansObserver';

function App() {
  const [plans, setPlans] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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
