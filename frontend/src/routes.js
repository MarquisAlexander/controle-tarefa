import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewTask from './pages/NewTask';
import Suport from './pages/Suport';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/task/new" component={NewTask} />
                <Route path="/suport" component={Suport} />
            </Switch>
        </BrowserRouter>
    )
}