import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import 'boxicons';

import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import LiveFeed from './Components/LiveFeed';


export default function App() {


    return (
        <div className="login">
            <div className="login__content">
                <div className="login__img">
                  <img src="https://ortex-static-files.s3.amazonaws.com/static/public/images/ortex_logo_v-white.svg" alt="Logo" />
                  <LiveFeed />
                </div>

            </div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={CreateAccount} />
            </Switch>
        </div>
    )
}
