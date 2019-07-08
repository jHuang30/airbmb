import React from "react";
import Splash from "./splash";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "../component/modal/modal";
import SpotIndexContainer from "./spots/spot_index_container";
import SpotContainer from "./spot_show/spot_show_container";
import LoginContainer from "../component/session/login_form_container";
import Confirmation from "../component/bookings/confirmation";
import Account from "../component/account/account";

const App = () => {
  return (
    <div>
      <Modal />
      <ProtectedRoute exact path="/myAccount" component={Account} />
      <Switch>
        <Route exact path="/spots" component={SpotIndexContainer} />
        <Route exact path="/spots/:spotId" component={SpotContainer} />
        <Route
          exact
          path="/spots/:spotId/confirmation"
          component={Confirmation}
        />
        <Route exact path="/" component={Splash} />
      </Switch>
      <Route path="/login" component={LoginContainer} />
    </div>
  );
};

export default App;
