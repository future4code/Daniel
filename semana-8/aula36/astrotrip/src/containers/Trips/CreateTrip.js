import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { fetchAllTrips, postNewTrip } from "../../actions/trips";
import Button from "@material-ui/core/Button";

const StyledHeader = styled(Grid)`
    width: 100vw;
    height: 100vh;
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
    color: "white";
    font-weight: bold;
`;
class CreateTrip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };
    }
    componentDidMount() {
        const token = window.localStorage.getItem("token");
        if (!token) {
            this.props.goLogin();
        }
    }
    handleChange = name => event => {
        const { value } = event.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    };
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.postNewTrip(this.state.form);
    };
    render() {
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
                        <Grid item xs={12} container justify="center">
                            <Grid item xs={12}>
                                <Typography
                                    variant="h3"
                                    align="center"
                                    gutterBottom
                                >
                                    Future X
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                container
                                justify="center"
                            >
                                <StyledForm onSubmit={this.handleOnSubmit}>
                                    <TextField
                                        id="outlined-name"
                                        label="Nome da Viagem"
                                        value={this.state.form["name"]}
                                        onChange={this.handleChange("name")}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        inputProps={{
                                            pattern: "[a-zA-Z\\s]{5,}"
                                        }}
                                    />
                                    <TextField
                                        id="outlined-duration"
                                        label="Duração (Em dias)"
                                        value={
                                            this.state.form["durationInDays"]
                                        }
                                        onChange={this.handleChange(
                                            "durationInDays"
                                        )}
                                        type="number"
                                        margin="normal"
                                        variant="outlined"
                                        required
                                        inputProps={{
                                            min: "50"
                                        }}
                                    />
                                    <TextField
                                        id="outlined-planet"
                                        select
                                        label="Planeta"
                                        value={this.state.form["planet"]}
                                        onChange={this.handleChange("planet")}
                                        SelectProps={{
                                            native: true
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="Mercurio">
                                            Mercurio
                                        </option>
                                        <option value="Venus">Venus</option>
                                        <option value="Terra">Terra</option>
                                        <option value="Marte">Marte</option>
                                        <option value="Jupiter">Jupiter</option>
                                        <option value="Saturno">Saturno</option>
                                        <option value="Urano">Urano</option>
                                        <option value="Netuno">Netuno</option>
                                    </TextField>
                                    <TextField
                                        id="outlined-date"
                                        defaultValue={
                                            new Date()
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        inputProps={{
                                            min: new Date()
                                                .toISOString()
                                                .split("T")[0]
                                        }}
                                        label="Data"
                                        type="date"
                                        value={this.state.form["date"]}
                                        onChange={this.handleChange("date")}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                    />

                                    <TextField
                                        id="outlined-description"
                                        label="Descrição"
                                        multiline
                                        rowsMax="4"
                                        value={this.state.form["description"]}
                                        onChange={this.handleChange(
                                            "description"
                                        )}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        inputProps={{
                                            pattern: ".{30,}$"
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
                    </Grid>
                </StyledHeader>
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
        fetchTrips: () => dispatch(fetchAllTrips()),
        goTrips: () => dispatch(push(routes.triplist)),
        postNewTrip: (form) => dispatch(postNewTrip(form))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTrip);
