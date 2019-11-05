import React, { useEffect } from "react";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { fetchAllTrips } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import hero from "../../imgs/undraw_Outer_space_drqu.svg";
import desc from "../../imgs/undraw_launching_125y.svg";
import TripCard from "../../components/TripCard";
const StyledGridHeader = styled(Grid)`
    height: 768px;
    background: url(${hero});
    background-size: auto 644px;
    background-repeat: no-repeat;
    background-position: 10%;
`;
const StyledImg = styled.img`
    height: 400px;
`;
const StyledDescGrid = styled(Grid)`
    padding-top: 100px;
`;

function HomePage(props) {
    const { fetchTrips, allTrips } = props;

    useEffect(() => {
        fetchTrips();
    }, []);

    const tripCards = allTrips
        ? allTrips.map(el => {
              return <TripCard trip={el} />;
          })
        : "";

    return (
        <section>
            <Grid container xs>
                <StyledGridHeader item xs={12} container justify="center">
                    <Navbar />
                    <Grid item lg={8} xs={12}>
                        Teste
                    </Grid>
                </StyledGridHeader>
                <Grid item container xs={12} justify="center">
                    <Grid item container lg={8} xs={12}>
                        <StyledDescGrid
                            item
                            container
                            xs
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Typography>
                                Descubra todas as maravilhas da galáxia. Vamos
                                juntos, sem escalas.
                            </Typography>
                        </StyledDescGrid>
                        <Grid item container xs justify="flex-end">
                            <StyledImg src={desc} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} justify="center">
                    <Grid item container lg={8} xs={12} >
                        {tripCards}
                    </Grid>
                </Grid>
            </Grid>
        </section>
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
