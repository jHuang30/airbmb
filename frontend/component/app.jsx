import React from 'react';
import Splash from './splash';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, protectedRoute} from '../util/route_util';
import Modal from '../component/modal/modal';
import SpotIndexContainer from './spots/spot_index_container'


const App = () => {
    return (
    <div>
        <Modal />

        <Switch>
            <Route exact path='/spots' component={SpotIndexContainer}/>
            <Route exact path='/' component={Splash} />
        </Switch>

    </div>
    )
};

export default App;