import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import TripList from "../Trips/List";
export const routes = {
    root: "/",
    appForm: "/application-form",
    login: "/login",
    createTrip: "/trips/create",
    listTrip: "/trips/list",
    detailTrip: "/trips/details"
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route path={routes.listTrip} component={TripList} />
                <Route path={routes.login} component={LoginPage} />
                <Route path={routes.root} component={HomePage} />
            </Switch>
        </ConnectedRouter>
    );
}

export default Router;
