import React from 'react';
import Splash from './splash';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from '../component/modal/modal';
import SpotIndexContainer from './spots/spot_index_container'
import SpotContainer from './spot_show/spot_show_container'
import LoginContainer from '../component/session/login_form_container';
import Confirmation from '../component/bookings/confirmation';



const App = () => {
    return (
    <div>
        <Modal />
{/* 
        <Route path='/signup' component={Modal}/>
        <Route path='/login' component={Modal} /> */}

        <Switch>
            <Route exact path='/spots' component={SpotIndexContainer} />
            {/* <ProtectedRoute exact path='/spots' component={SpotIndexContainer}/> */}
            <ProtectedRoute exact path='/spots/:spotId' component={SpotContainer} />
            <ProtectedRoute exact path='/spots/:spotId/:bookingId' component={Confirmation} />
            <Route exact path='/' component={Splash} />
        </Switch>
            {/* <Route path='/login' component={LoginContainer} /> */}

    </div>
    )
};

export default App;