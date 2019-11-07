import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Navbar";
import { loginAction } from "../../actions/auth";

const LoginWrapper = styled.form`
    width: 100%;
    height: 80vh;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
`;

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    onClickLogin = () => {
        const { email, password } = this.state;
        this.props.doLogin(email, password);
    };
    render() {
        const { email, password } = this.state;

        return (
            <React.Fragment>
                <Grid container justify="center">
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
                </Grid>
                <LoginWrapper>
                    <TextField
                        onChange={this.handleFieldChange}
                        name="email"
                        type="email"
                        label="E-mail"
                        value={email}
                    />
                    <TextField
                        onChange={this.handleFieldChange}
                        name="password"
                        type="password"
                        label="Senha"
                        value={password}
                    />
                    <Button onClick={this.onClickLogin}>Login</Button>
                </LoginWrapper>
            </React.Fragment>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        goHome: () => dispatch(push(routes.root)),
        goLogin: () => dispatch(push(routes.login)),
        doLogin: (email, pwd) => dispatch(loginAction(email, pwd))
    };
}
export default connect(
    null,
    mapDispatchToProps
)(LoginPage);
