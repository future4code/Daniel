import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../LoginPage/index';
import SignupPage from '../SignupPage/index';
import FeedPage from '../FeedPage/index';
import VideoPage from '../VideoPage/index';
import VideoUploadPage from '../VideoUploadPage/index';
import { PrivateRoute } from '../../components/PrivateRoute/index';

export const routes = {
  root: "/",
  login: "/login",
  signup: "/signup",
  video: "/video/:id",
  videoUpload: "/videoupload"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.signup} component={SignupPage} />
        <PrivateRoute path={routes.video} component={VideoPage} />
        <PrivateRoute path={routes.videoUpload} component={VideoUploadPage} />
        <PrivateRoute path={routes.root} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
