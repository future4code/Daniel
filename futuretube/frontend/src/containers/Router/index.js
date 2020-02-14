import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../LoginPage/index';
import { SignupPage } from '../SignupPage/index';
import { FeedPage } from '../FeedPage/index';
import { VideoPage } from '../VideoPage/index';

const routes = {};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={VideoPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
