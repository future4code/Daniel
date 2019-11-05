import React from "react";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { fetchAllTrips } from "../../actions";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../Navbar";
import hero from "../../imgs/undraw_Outer_space_drqu.svg";
import desc from "../../imgs/undraw_launching_125y.svg";

const StyledGridHeader = styled(Grid)`
    height: 768px;
    background: url(${hero});
    background-size: auto 768px;
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
    return (
        <section>
            <Grid container xs>
                <StyledGridHeader item xs={12} container justify="center">
                    <Navbar />
                    <Grid item xs={6}></Grid>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas quis lacus faucibus, porta lectus
                            eget, feugiat odio. Praesent ipsum erat, lacinia nec
                            nibh ut, dictum tincidunt leo. Quisque tellus eros,
                            efficitur at nunc at, facilisis rutrum leo. Duis a
                            mi elementum, dapibus felis a, maximus felis. Donec
                            et condimentum lectus, sit amet tempor leo.
                        </StyledDescGrid>
                        <Grid item container xs justify="flex-end">
                            <StyledImg src={desc} />
                        </Grid>
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
