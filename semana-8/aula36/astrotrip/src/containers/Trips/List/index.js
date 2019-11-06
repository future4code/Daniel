import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { routes } from "../../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { fetchAllTrips } from "../../../actions";

const StyledGrid = styled(Grid)`
    width: 100vw;
    height: 100vh;
`;
function TripsList(props) {
    const { fetchTrips, allTrips, setTripDetail } = props;

    useEffect(() => {
        if (!allTrips) {
            fetchTrips();
        }
    }, []);

    const tripList = allTrips
        ? allTrips.map(el => {
              return (
                  <ListItem
                      button
                      onClick={() => {
                          handleClickTrip(el.id);
                      }}
                  >
                      {el.name}
                  </ListItem>
              );
          })
        : "";

    const handleClickTrip = id => {
        const trip = allTrips.filter(el => {
            return el.id === id;
        });
        setTripDetail(id);
    };
    return (
        <StyledGrid container>
            <Grid item xs={6}>
                IMAGEM
            </Grid>
            <Grid item xs={6}>
                <Navbar />
                <Grid item>
                    <Button size="small" color="primary" onClick={()=>{props.goNewTripForm()}}>
                        Criar Viagem
                    </Button>
                </Grid>
                <Grid item>
                    <List>{tripList}</List>
                </Grid>
            </Grid>
        </StyledGrid>
    );
}
function mapStateToProps(state) {
    return {
        allTrips: state.trips.trips,
        trip: state.trips.tripDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchTrips: () => dispatch(fetchAllTrips()),
        goDetail: () => dispatch(push(routes.detailTrip)),
        goNewTripForm: () => dispatch(push(routes.createTrip)),
        setTripDetail: (tripId) => dispatch(push(`/trips/detail/${tripId}`))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripsList);
