import { CircularProgress } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PublishIcon from '@material-ui/icons/Publish';
import * as firebase from "firebase/app";
import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar/index';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { uploadVideoAction } from '../../actions';
import  uuidv4  from 'uuid/v4';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
    },
    uploadIcon: {
        marginTop: theme.spacing(2),
        position: "relative",
        width: "150px",
        height: "150px",

    },
    uploadIconSuccess: {
        marginTop: theme.spacing(2),
        position: "relative",
        width: "150px",
        height: "150px",
        backgroundColor: theme.palette.success.main
    },
    form: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    progressbar: {
        position: 'absolute',
        color: theme.palette.primary.main
    },
    progressbarSuccess: {
        position: 'absolute',
        color: theme.palette.success.main
    },
    submit: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.secondaryGradient} 90%)`,
        fontWeight: "bold",
        marginTop: theme.spacing(1),
    }
}));
export function VideoUploadPage(props) {
    const inputRef = useRef(null);
    const classes = useStyles();
    const [state, setstate] = useState(0);
    const [form, setForm] = useState({})
    const progressbarDisplay = state > 0 ? 'inherit' : 'none';
    const progressbarClass = state >= 100 ? classes.progressbarSuccess : classes.progressbar;
    const uploadIconClass = state >= 100 ? classes.uploadIconSuccess : classes.uploadIcon;

    const uploadFile = async () => {
        try {
            const storageRef = firebase.storage().ref();
            const newFileRef = storageRef.child(`videos/${uuidv4()}`);
            const metadata = {
                customMetadata: {
                    'teste': "BOX"
                }
            };
            const uploadResult = newFileRef.put(inputRef.current.files[0], metadata);
            return new Promise((resolve, reject) => {
                uploadResult.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setstate(progress);
                }, function (error) {
                    reject("");
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = await uploadFile();
        const request = {
            url,
            title: form.title,
            description: form.description
        }
        props.doUploadVideo(request);
    }

    const handleInputChange = name => event => {
        const { value } = event.target;
        setForm({ ...form, [name]: value });
    }
    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                    <Typography variant="h4" align="center">
                        Upload de vídeo
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="text-input-title"
                            label="Título"
                            name="title"
                            autoFocus
                            onChange={handleInputChange("title")}
                            value={form["title"]}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="text-input-description"
                            label="Descrição"
                            name="description"
                            autoFocus
                            onChange={handleInputChange("description")}
                            value={form["description"]}
                        />
                        <Avatar className={uploadIconClass} >
                            <PublishIcon style={{ fontSize: 100 }} />
                            <CircularProgress
                                disableShrink
                                variant="determinate"
                                size={150}
                                value={state}
                                className={progressbarClass}
                                style={{ display: progressbarDisplay }} />
                        </Avatar>

                        <div className={classes.form}>
                            <input accept="video/*" style={{ display: "none" }} id="icon-button-file" type="file" ref={inputRef} />
                            <label htmlFor="icon-button-file">
                                <Button color="secondary" variant="contained" component="span">
                                    Escolher vídeo
                            </Button>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                        >
                            Enviar!
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        doUploadVideo: (request) => dispatch(uploadVideoAction(request))
    }
}

export default connect(null, mapDispatchToProps)(VideoUploadPage);
