import React, { Suspense, lazy, useReducer, useState } from 'react';
import INIT_STATE from '../store/initState';
import { UserProvider } from '../store/context';
import reducer from '../store/reducer';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';


import Revenues from '../pages/Revenues';
import Expenses from '../pages/Expenses';
import Staffs from '../pages/Staffs';
import Users from '../pages/Users';
import Positions from '../pages/Positions';
import Departments from '../pages/Departments';
import RevenuesAction from 'pages/RevenuesAction';


const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    const localState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : INIT_STATE;
    const [state, dispatch] = useReducer(reducer, localState);
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <UserProvider value={{ state, dispatch }}>
                    <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                    {/* //edit */}
                    <Route exact path={SLUGS.staffs} render={() => <Staffs />} />
                    <Route exact path={SLUGS.users} render={() => <Users />} />
                    <Route exact path={SLUGS.positions} render={() => <Positions />} />
                    <Route exact path={SLUGS.departments} render={() => <Departments />} />
                    
                    <Route exact path={SLUGS.revenues} render={() => <Revenues />} />
                    <Route exact path={SLUGS.revenuesaction} render={() => <RevenuesAction />} />
                    <Route exact path={SLUGS.expenses} render={() => <Expenses />} />
                    {/* //edit */}
                    <Redirect to={SLUGS.dashboard} />
                </UserProvider>
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
