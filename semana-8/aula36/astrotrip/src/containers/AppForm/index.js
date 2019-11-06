import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import hero from "../../imgs/undraw_Outer_space_drqu.svg";
import { optionCountry } from "../../components/SelectOption";
import { fetchAllTrips, postTripCandidate } from "../../actions";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const StyledGridHeader = styled(Grid)`
    height: 768px;
    background: url(${hero});
    background-size: auto 644px;
    background-repeat: no-repeat;
    background-position: 10%;
`;

const loginForm = [
    {
        name: "name",
        type: "text",
        label: "Nome",
        required: true,
        pattern: `[a-zA-Z\\s]{3,}`
    },
    {
        name: "age",
        type: "number",
        label: "Idade",
        required: true,
        min: 18
    },
    {
        name: "profession",
        type: "text",
        label: "Profissão",
        required: true,
        pattern: "^.{10,}$"
    },
    {
        name: "applicationText",
        type: "text",
        label: "Motivo",
        required: true,
        pattern: "^[a-zA-Z0-9.].{30,}$"
    }
];

class AppForm extends Component {
    constructor(props) {
        super(props);

        this.state = { form: { country: "Brasil" } };
    }

    componentDidMount() {
        this.props.fetchTrips();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.postTripCandidate(this.state.form);
    };

    render() {
        const trips = this.props.allTrips
            ? this.props.allTrips.map(el => {
                  return <option value={el.id}>{el.name}</option>;
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
                        <Grid item lg={8} xs={12}>
                            <form onSubmit={this.handleOnSubmit}>
                                {loginForm.map(input => (
                                    <div key={input.name}>
                                        <label htmlFor={input.name}>
                                            {input.label}:{" "}
                                        </label>
                                        <input
                                            id={input.name}
                                            name={input.name}
                                            type={input.type}
                                            value={
                                                this.state.form[input.name] ||
                                                ""
                                            }
                                            required={input.required}
                                            onChange={this.handleInputChange}
                                            pattern={input.pattern}
                                            min={input.min}
                                        />
                                    </div>
                                ))}
                                <div key="country">
                                    <label htmlFor="country">País</label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={this.state.form["country"]}
                                        onChange={this.handleInputChange}
                                    >
                                        {optionCountry}
                                    </select>
                                </div>
                                <div key="tripId">
                                    <label htmlFor="tripId">País</label>
                                    <select
                                        id="tripId"
                                        name="tripId"
                                        value={this.state.form["tripId"]}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value=""></option>
                                        {trips}
                                    </select>
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        </Grid>
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
        fetchTrips: () => dispatch(fetchAllTrips()),
        postTripCandidate: form => dispatch(postTripCandidate(form))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
