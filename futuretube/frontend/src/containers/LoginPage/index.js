import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react'
import { loginAction } from '../../actions/index';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export function LoginPage(props) {
    const classes = useStyles();

    const [form, setForm] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = form;
        props.doLogin(email, password);
    }

    const handleInputChange = name => event => {
        const { value } = event.target;
        setForm({ ...form, [name]: value });
    }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.logo}>
                    <PlayCircleOutlineIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    FutureTube
                </Typography>
                <Typography component="subtitle1" gutterBottom>
                    Faça seu login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoFocus
                        onChange={handleInputChange("email")}
                        value={form["email"]}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        onChange={handleInputChange("password")}
                        value={form["password"]}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Grid container justify="center">
                        <Link href="#" variant="body2">
                            {"Não tem uma conta? Clique aqui para cadastrar!"}
                        </Link>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
function mapDispatchToProps(dispatch) {
    return {
        doLogin: (email, password) => dispatch(loginAction(email, password)),
    };
}

export default connect(null, mapDispatchToProps)(LoginPage);