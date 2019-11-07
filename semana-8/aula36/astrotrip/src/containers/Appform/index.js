import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { optionCountry } from "../../components/CountryOption";
import { fetchAllTrips, postTripCandidate } from "../../actions/trips";
import Button from "@material-ui/core/Button";

const StyledHeader = styled(Grid)`
    width: 100vw;
`;
const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    > div {
        margin: 8px 8px;
    }
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
class AppForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };
    }
    componentDidMount() {
        this.props.fetchTrips();
    }
    handleChange = name => event => {
        const { value } = event.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    };
    handleOnSubmit = event => {
        event.preventDefault();
    };
    render() {
        console.log(this.props.allTrips);
        const tripsOptions = this.props.allTrips
            ? this.props.allTrips.map(el => {
                  return <option value={el.id}>{el.name}</option>;
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
                    </Grid>
                    <Grid item xs={12} lg={5} container justify="center">
                        <StyledForm onSubmit={this.handleOnSubmit}>
                            <TextField
                                id="outlined-name"
                                label="Nome completo"
                                value={this.state.form["name"]}
                                onChange={this.handleChange("name")}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                required
                                inputProps={{
                                    pattern: "[a-zA-Z\\s]{3,}"
                                }}
                            />
                            <TextField
                                id="outlined-age"
                                label="Idade"
                                value={this.state.form["age"]}
                                onChange={this.handleChange("age")}
                                type="number"
                                margin="normal"
                                variant="outlined"
                                required
                                inputProps={{
                                    min: "18"
                                }}
                            />
                            <TextField
                                id="outlined-profession"
                                label="Profissão"
                                value={this.state.form["profession"]}
                                onChange={this.handleChange("profession")}
                                margin="normal"
                                variant="outlined"
                                required
                                inputProps={{
                                    pattern: "^.{10,}$"
                                }}
                            />
                            <TextField
                                id="outlined-country"
                                select
                                label="País"
                                value={this.state.form["country"]}
                                onChange={this.handleChange("country")}
                                SelectProps={{
                                    native: true
                                }}
                                margin="normal"
                                variant="outlined"
                                required
                            >
                                {optionCountry}
                            </TextField>
                            <TextField
                                id="outlined-trips"
                                select
                                label="Viagem"
                                value={this.state.form["trips"]}
                                onChange={this.handleChange("trips")}
                                SelectProps={{
                                    native: true
                                }}
                                margin="normal"
                                variant="outlined"
                                required
                            >
                                <option value=""></option>
                                {tripsOptions}
                            </TextField>
                            <TextField
                                id="outlined-applicationText"
                                label="Motivo"
                                multiline
                                rowsMax="4"
                                value={this.state.form["applicationText"]}
                                onChange={this.handleChange("applicationText")}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                required
                                inputProps={{
                                    pattern: "^.{30,}$"
                                }}
                            />
                            <StyledButton
                                variant="contained"
                                size="large"
                                type="submit"
                            >
                                Enviar
                            </StyledButton>
                        </StyledForm>
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
        goHome: () => dispatch(push(routes.root)),
        goLogin: () => dispatch(push(routes.login)),
        goAppform: () => dispatch(push(routes.appform)),
        fetchTrips: () => dispatch(fetchAllTrips()),
        sendForm: form => dispatch(postTripCandidate(form))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
