import React from "react";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { fetchAllTrips } from "../../actions";

function HomePage(props) {
    return (
        <div>
            <div>
                Appbar
                <ul>
                    <li>
                        <button onClick={props.goHome}>Home</button>
                    </li>
                    <li>
                        <button onClick={props.goLogin}>Login</button>
                    </li>
                </ul>
            </div>

            <button onClick={props.fetchTrips}>Fetch</button>
            <div>
                <ul></ul>
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        allTrips: state.trips.trips
    };
}
function mapDispatchToProps(dispatch) {
    return {
        goHome: () => dispatch(push(routes.root)),
        goLogin: () => dispatch(push(routes.login)),
        fetchTrips: () => dispatch(fetchAllTrips())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
