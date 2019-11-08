import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import TripListItem from "../../components/TripListItem";
import Paper from "@material-ui/core/Paper";
import { fetchAllTrips, postDeleteTrip } from "../../actions/trips";
import Button from "@material-ui/core/Button";

const StyledHeader = styled(Grid)`
    width: 100vw;
`;
const StyledButton = styled(Button)`
    background: rgb(255, 152, 0);
    background: linear-gradient(
        135deg,
        rgba(255, 152, 0, 1) 0%,
        rgba(207, 48, 48, 1) 100%
    );
    span {
        color: white;
        font-weight: bold;
    }
`;
class ListTrip extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        const token = window.localStorage.getItem("token");
        if (!token) {
            this.props.goLogin();
        } else {
            this.props.fetchTrips();
        }
    }
    handleClickDetail = id => {
        this.props.goTripDetail(id);
    };
    handleClickDelete = id => {
        this.props.deleteTrip(id);
    };
    render() {
        const tripListItem = this.props.allTrips
            ? this.props.allTrips.map(el => {
                  return (
                      <TripListItem
                          trip={el}
                          onClickDetail={this.handleClickDetail}
                          onClickDelete={this.handleClickDelete}
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
                                this.props.goLogin();
                            }}
                            color="black"
                        />
                    </Grid>
                </StyledHeader>
                <Grid item xs={12} container justify="center">
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" gutterBottom>
                            Future X
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            gutterBottom
                        >
                            Todas viagens
                        </Typography>
                    </Grid>
                    <Grid item lg={4} container justify="center">
                        <StyledButton
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => {
                                this.props.goCreateTrip();
                            }}
                        >
                            Criar Viagem
                        </StyledButton>
                        <Paper>
                            <List>{tripListItem}</List>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        );
    }
}
function mapStateToProps(state) {
    return {
        allTrips: state.trips.trips
    };
}
function mapDispatchToProps(dispatch) {
    return {
        goLogin: () => dispatch(push(routes.login)),
        goHome: () => dispatch(push(routes.root)),
        goCreateTrip: () => dispatch(push(routes.tripCreate)),
        goTripDetail: tripId => dispatch(push(`/trips/detail/${tripId}`)),
        fetchTrips: () => dispatch(fetchAllTrips()),
        deleteTrip: id => dispatch(postDeleteTrip(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTrip);
