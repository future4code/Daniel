import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Home from "../Home";
import Appform from "../Appform";
import ListTrip from "../Trips/ListTrip";
import DetailTrip from "../Trips/DetailTrip";
import CreateTrip from "../Trips/CreateTrip";
export const routes = {
    root: "/",
    login: "/login",
    appform: "/application-form",
    triplist: "/trips/list",
    tripdetail: "/trips/detail/:id",
    tripCreate: "/trips/create"
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route path={routes.tripCreate} component={CreateTrip} />
                <Route path={routes.tripdetail} component={DetailTrip} />
                <Route path={routes.triplist} component={ListTrip} />
                <Route path={routes.appform} component={Appform} />
                <Route path={routes.login} component={LoginPage} />
                <Route path={routes.root} component={Home} />
            </Switch>
        </ConnectedRouter>
    );
}

export default Router;
