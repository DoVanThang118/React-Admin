import React, { useEffect, useContext } from 'react';
// import React, { useReducer, useState, useEffect } from 'react';
import INIT_STATE from '../store/initState';
// import { UserProvider } from '../store/context';
// import reducer from '../store/reducer';
// import { Redirect, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';
import UserContext from "../store/context";

function Routes() {
    const localState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : INIT_STATE;
    //const {state} = localState;
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (localState.token==null) ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
