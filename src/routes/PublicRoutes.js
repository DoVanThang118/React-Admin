import React, { useReducer, useState } from 'react';
import INIT_STATE from '../store/initState';
import { UserProvider } from '../store/context';
import reducer from '../store/reducer';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';

import Login from '../pages/Login';

function PublicRoutes() {
    const localState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : INIT_STATE;
    const [state, dispatch] = useReducer(reducer, localState);
    return (
        <Switch>
            <UserProvider value={{ state, dispatch }}>
                <Route path={SLUGS.login} render={() => <Login />} />
                <Redirect to={SLUGS.login} />
            </UserProvider>
        </Switch>
    );
}

export default PublicRoutes;
