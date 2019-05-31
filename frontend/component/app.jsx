import React from 'react';
import Splash from './splash';
import { Route } from 'react-router-dom';
// import LoginContainer from './session/login_form_container';
// import SignupContainer from './session/signup_form_container';
import {AuthRoute, protectedRoute} from '../util/route_util';
import Modal from '../component/modal/modal';

const App = () => (
    <div>
        <Modal />

        <Route exact path="/" component={Splash} />
        {/* <AuthRoute exact path="/spots" component={SpotsIndex} /> */}

        {/* <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} /> */}

    </div>
);

export default App;