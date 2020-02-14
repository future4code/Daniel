import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        margin: theme.spacing(1),
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.secondaryGradient} 90%)`
    },
    logoIcon: {
        fontSize: 30
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    uploadGrid: {
        marginTop: theme.spacing(3),
    },
    input: {
        display: 'none',
    },
    submit: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.secondaryGradient} 90%)`,
        fontWeight: "bold",
        marginTop: theme.spacing(1),
    }
}));

export function SignupPage(props) {
    const classes = useStyles();

    const [form, setForm] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleInputChange = name => event => {
        if (name === "birthdate") {
            setForm({ ...form, [name]: event });
        }
        else {
            const { value } = event.target;
            setForm({ ...form, [name]: value });
        }

    }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.logo}>
                    <PlayCircleOutlineIcon className={classes.logoIcon} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    FutureTube
                </Typography>
                <Typography component="subtitle1" gutterBottom>
                    Faça seu cadastro
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="text-input-name"
                        label="Nome"
                        name="name"
                        autoFocus
                        onChange={handleInputChange("name")}
                        value={form["name"]}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="text-input-email"
                        label="Email"
                        name="email"
                        autoFocus
                        onChange={handleInputChange("email")}
                        value={form["email"]}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="text-input-password"
                        onChange={handleInputChange("password")}
                        value={form["password"]}
                    />
                    <Grid container justify="center" alignItems="center">
                    <Grid item xs>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    name="birthdate"
                                    id="date-picker-dialog"
                                    format="dd/MM/yyyy"
                                    label="Data de nascimento"
                                    value={form["birthdate"]}
                                    onChange={handleInputChange("birthdate")}
                                    className={classes.datepicker}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs className={classes.uploadGrid}>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file" >
                                <IconButton color="secondary" aria-label="upload picture" component="span">
                                    <PhotoCamera style={{ fontSize: 30 }} />
                                </IconButton>
                                <Typography variant="caption" gutterBottom>
                                    Escolha sua foto
                                </Typography>
                            </label>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                className={classes.submit}
                            >
                                Cadastrar
                            </Button>
                        </Grid>

                    </Grid>

                </form>
            </div>
        </Container>
    );
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(null, mapDispatchToProps)(SignupPage);