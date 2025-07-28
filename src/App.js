import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { setPlansAction, addPlansAction, updatePlansAction, getPlansAction, deletePlansAction } from './services/actions/plans_actions';
import { getPlansObserver } from './services/observers/plansObserver';

function App() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const planFilter = 12;
  const planId = '34dou3fNNbpwv8noMnwY'
  
  useEffect(()=>{
    deletePlansAction(planId);
    const unsubscribe = getPlansObserver((data, e) =>{
      if(e){
        console.log('erro em executar observer: ', e);
        setError(e);
        setLoading(false);
        return;
      }
      setPlans(data);
      setLoading(false);
    }, planFilter)
    return () =>{
    console.log('desinscrevendo do observer')
    unsubscribe();
  }
  },[planFilter])
}

export default App;
