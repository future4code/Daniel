import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { routes } from "../../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { fetchTripDetail } from "../../../actions";
import ListItem from "@material-ui/core/ListItem";
const StyledGrid = styled(Grid)`
    width: 100vw;
    height: 100vh;
`;
function TripsDetail(props) {
    const { tripDetail, fetchTripDetail } = props;

    useEffect(() => {
        if (!tripDetail) {
            fetchTripDetail(props.match.params.id);
        }
    }, []);

    const tripCandidates = tripDetail
        ? tripDetail.candidates.map(el => {
              return <ListItem> {el.name} </ListItem>;
          })
        : "";

    return (
        <StyledGrid container>
            <Grid item xs={6}>
                IMAGEM
            </Grid>
            <Grid item xs={6}>
                <Navbar />
                <Grid item>
                    <Button size="small" color="primary">
                        Criar Viagem
                    </Button>
                </Grid>
                <Grid item>
                    <List>{tripCandidates}</List>
                </Grid>
            </Grid>
        </StyledGrid>
    );
}
function mapStateToProps(state) {
    return {
        allTrips: state.trips.trips,
        tripDetail: state.trips.tripDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchTripDetail: id => dispatch(fetchTripDetail(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripsDetail);
