import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
//100% 0% 100% 0% / 0% 39% 61% 100%

const StyledHeroBanner = styled(Grid)`
    width: 100vw;
    height: 60vh;
    background: rgb(255, 152, 0);
    background: linear-gradient(
        135deg,
        rgba(255, 152, 0, 1) 0%,
        rgba(207, 48, 48, 1) 100%
    );
    border-radius: 0% 100% 0% 100% / 84% 0% 100% 16%   ;
    
`;
const StyledCampaign = styled(Grid)`
    width: 100vw;
    padding-top: 75px;
`;

const StyledButton = styled(Button)`
    background: rgb(255, 152, 0);
    background: linear-gradient(
        135deg,
        rgba(255, 152, 0, 1) 0%,
        rgba(207, 48, 48, 1) 100%
    );
    height: 50px;
    span {
        color: white;
        font-weight: bold;
    }
`;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section>
                <StyledHeroBanner container justify="center">
                    <Grid item xs={12} lg={8}>
                        <Navbar
                            onClickHome={() => {
                                this.props.goHome();
                            }}
                            onClickLogin={() => {
                                this.props.goLogin();
                            }}
                            color="white"
                        />
                    </Grid>
                </StyledHeroBanner>
                <StyledCampaign container justify="center" wrap="wrap">
                    <Grid item xs={12} lg={8} container justify="center">
                        <Typography variant="h3" gutterBottom>
                            Frase longa e de bastante impacto para captar o
                            cliente
                        </Typography>
                        <StyledButton
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => {
                                this.props.goAppform();
                            }}
                        >
                            Inscreva-se
                        </StyledButton>
                    </Grid>
                </StyledCampaign>
            </section>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        goHome: () => dispatch(push(routes.root)),
        goLogin: () => dispatch(push(routes.login)),
        goAppform: () => dispatch(push(routes.appform))
    };
}
export default connect(
    null,
    mapDispatchToProps
)(Home);
