import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import 'boxicons';

import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import ResetPwd from './Components/ResetPwd';
import Navbar from './Components/Navbar';


export default function App() {


    return (
        <div className="login">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={CreateAccount} />
                <Route path="/resetpassword" component={ResetPwd} />
            </Switch>

            <div className='login__madeby'>
                <p>Technical Task for <span>Ortex</span>. Made by <a href="https://linktr.ee/gabrielmauas" target="_blank" rel="noreferrer">Gabriel Mauas</a>.</p>
            </div>
        </div>
    )
}
