import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { fetchTripDetail, postDecideCandidate } from "../../actions/trips";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import TripDetailItem from "../../components/TripDetailItem";

const StyledHeader = styled(Grid)`
    width: 100vw;
`;
class DetailTrip extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        const { tripDetail, match, fetchTripDetail } = this.props;
        const token = window.localStorage.getItem("token");
        if (!token) {
            this.props.goLogin();
        } else {
            if (!tripDetail || tripDetail.id !== match.params.id) {
                fetchTripDetail(match.params.id);
            }
        }
    }
    handleApprove = id => {
        this.props.decideCandidate(id, true, this.props.tripDetail.id);
    };
    handleReprove = id => {
        this.props.decideCandidate(id, false, this.props.tripDetail.id);
    };
    render() {
        const candidatesListItem = this.props.tripDetail
            ? this.props.tripDetail.candidates.map(el => {
                  return (
                      <TripDetailItem
                          candidate={el}
                          onApprove={this.handleApprove}
                          onReprove={this.handleReprove}
                      />
                  );
              })
            : "";
        return (
            <section>
                <StyledHeader container justify="center">
                    <Grid item xs={12} lg={8}>
                        <Navbar
                            onClickHome={() => {
                                this.props.goHome();
                            }}
                            onClickLogin={() => {
                                this.props.goTrips();
                            }}
                            color="black"
                        />
                    </Grid>
                </StyledHeader>
                <Grid container justify="center" wrap="wrap">
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" gutterBottom>
                            Future X
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            gutterBottom
                        >
                            Detalhes
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Paper>
                            <Typography>
                                <ul>
                                    <li>
                                        Nome: 
                                        {this.props.tripDetail
                                            ? this.props.tripDetail.name
                                            : ""}
                                    </li>
                                    <li>
                                        Data: 
                                        {this.props.tripDetail
                                            ? this.props.tripDetail.date
                                            : ""}
                                    </li>
                                    <li>
                                        Duração: 
                                        {this.props.tripDetail
                                            ? this.props.tripDetail
                                                  .durationInDays
                                            : ""}
                                    </li>
                                    <li>
                                        Planet: 
                                        {this.props.tripDetail
                                            ? this.props.tripDetail.planet
                                            : ""}
                                    </li>
                                    <li>
                                        Descrição: 
                                        {this.props.tripDetail
                                            ? this.props.tripDetail.description
                                            : ""}
                                    </li>
                                </ul>
                            </Typography>
                        </Paper>
                        <Paper>
                            <List>{candidatesListItem}</List>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        );
    }
}
function mapStateToProps(state) {
    return {
        tripDetail: state.trips.tripDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        goTrips: () => dispatch(push(routes.triplist)),
        goHome: () => dispatch(push(routes.root)),
        goTripDetail: tripId => dispatch(push(`/trips/detail/${tripId}`)),
        fetchTripDetail: id => dispatch(fetchTripDetail(id)),
        decideCandidate: (id, app, tripId) =>
            dispatch(postDecideCandidate(id, app, tripId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTrip);
