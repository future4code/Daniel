import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import { CircularProgress } from '@material-ui/core';
import * as firebase from "firebase/app";
import { signupAction } from '../../actions';
import uuidv4 from 'uuid/v4';

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
    progressbar: {
        position: 'absolute',
        color: theme.palette.primary.main
    },
    progressbarSuccess: {
        position: 'absolute',
        color: theme.palette.success.main
    },
    uploadIcon: {
        position: "relative",
    },
    submit: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.secondaryGradient} 90%)`,
        fontWeight: "bold",
        marginTop: theme.spacing(1),
    }
}));

export function SignupPage(props) {
    const inputRef = useRef(null);
    const classes = useStyles();

    const [form, setForm] = useState({ birthdate: new Date() })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = await uploadFile();
        const requestForm = {
            name: form.name,
            email: form.email,
            password: form.password,
            birthdate: form.birthdate.toISOString().split('T')[0],
            photoUrl: url
        }
        props.doSignup(requestForm);
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
    const uploadFile = async () => {
        try {
            const storageRef = firebase.storage().ref();
            const newFileRef = storageRef.child(`userPhotos/${uuidv4()}`);
            const metadata = {
                customMetadata: {
                    'teste': "BOX"
                }
            };
            const uploadResult = newFileRef.put(inputRef.current.files[0], metadata);
            return new Promise((resolve, reject) => {
                uploadResult.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress)
                    setstate(progress);
                }, function (error) {
                    console.log(error)
                    reject(error);
                }, function () {
                    uploadResult.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        resolve(downloadURL);
                    });
                });
            });

        } catch (e) {
            console.log(e);
        }
    }
    const [state, setstate] = useState(0);
    const progressbarDisplay = state > 0 ? 'inherit' : 'none';
    const progressbarClass = state >= 100 ? classes.progressbarSuccess : classes.progressbar;

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
                                    format="dd-MM-yyyy"
                                    label="Data de nascimento"
                                    value={form["birthdate"]}
                                    onChange={handleInputChange("birthdate")}
                                    className={classes.datepicker}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs className={classes.uploadGrid}>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" ref={inputRef} />
                            <label htmlFor="icon-button-file" >
                                <CircularProgress
                                    disableShrink
                                    variant="determinate"
                                    size={50}
                                    value={state}
                                    className={progressbarClass}
                                    style={{ display: progressbarDisplay }}
                                />
                                <IconButton color="secondary" aria-label="upload picture" component="span" className={classes.fileButton}>
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
        doSignup: (request) => dispatch(signupAction(request))
    }
}

export default connect(null, mapDispatchToProps)(SignupPage);