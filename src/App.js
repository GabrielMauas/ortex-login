import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';
import 'boxicons';

import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import LiveFeed from './Components/LiveFeed';


export default function App() {

  const [rate, setRate] = useState('');

  const URL = 'http://api.exchangeratesapi.io/v1/latest';
  const API_KEY = '05e7ed28b049cbd512ff5252c2413d1b';
  const currency = 'USD';
  const headers = {
    
    "topic": "subscribe",
    "to": "EURUSD:CUR"
  }

  const getData = () => {
    axios.get(URL+`?access_key=${API_KEY}&base=EUR&symbols=USD`)
      .then(res => {
        console.log(res.data.rates);
        setRate(res.data.rates.USD);
      })
      .catch(err => console.log(err));
  }


    return (
        <div className="login">
            <div className="login__content">
                <div className="login__img">
                  <img src="https://ortex-static-files.s3.amazonaws.com/static/public/images/ortex_logo_v-white.svg" alt="Logo" />
                  <div className='login__feed'>
                      <span>EUR/USD: ${rate}</span>
                      <span className="login__feed-button"><box-icon name='refresh' color="#f2f2f2" onClick={getData} ></box-icon></span>
                      
                  </div>
                </div>

            </div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={CreateAccount} />
            </Switch>
        </div>
    )
}
