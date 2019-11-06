import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { postNewTrip } from "../../actions";

const StyledGrid = styled(Grid)`
    width: 100vw;
    height: 100vh;
`;
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${(
    "0" +
    (today.getDate() + 1)
).slice(-2)}`;
const tripForm = [
    {
        name: "name",
        type: "text",
        label: "Nome da Viagem",
        required: true,
        pattern: `[a-zA-Z\\s]{5,}`
    },
    {
        name: "description",
        type: "text",
        label: "Descrição",
        required: true,
        pattern: "^.{30,}$"
    },
    {
        name: "date",
        type: "date",
        label: "Data",
        required: true,
        min: date
    },
    {
        name: "durationInDays",
        type: "number",
        label: "Duração (Em dias)",
        required: true,
        min: 50
    }
];
class NewTripForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: { planet: "" }
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.postNewTrip(this.state.form);
    };
    render() {
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
                        <form onSubmit={this.handleOnSubmit}>
                            {tripForm.map(input => (
                                <div key={input.name}>
                                    <label htmlFor={input.name}>
                                        {input.label}:{" "}
                                    </label>
                                    <input
                                        id={input.name}
                                        name={input.name}
                                        type={input.type}
                                        value={
                                            this.state.form[input.name] || ""
                                        }
                                        required={input.required}
                                        onChange={this.handleInputChange}
                                        pattern={input.pattern}
                                        min={input.min}
                                    />
                                </div>
                            ))}
                            <div key="planet">
                                <label htmlFor="planet">Planeta</label>
                                <select
                                    id="planet"
                                    name="planet"
                                    value={this.state.form["planet"]}
                                    onChange={this.handleInputChange}
                                    required
                                >
                                    <option value=""></option>
                                    <option value="Mercurio">Mercurio</option>
                                    <option value="Venus">Venus</option>
                                    <option value="Terra">Terra</option>
                                    <option value="Marte">Marte</option>
                                    <option value="Jupiter">Jupiter</option>
                                    <option value="Saturno">Saturno</option>
                                    <option value="Urano">Urano</option>
                                    <option value="Netuno">Netuno</option>
                                </select>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </Grid>
                </Grid>
            </StyledGrid>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postNewTrip: form => dispatch(postNewTrip(form))
    };
}
export default connect(
    null,
    mapDispatchToProps
)(NewTripForm);
