import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import {AuthRoute, protectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>

        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
    </div>
);

export default App;