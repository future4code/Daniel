import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/index';
import Skeleton from '@material-ui/lab/Skeleton';
import { getVideoAction } from '../../actions';


const useStyles = makeStyles(theme => ({
    card: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    grid: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '& div': {
            marginRight: theme.spacing(2)
        }
    },
    video: {
        width: "100%"
    }
}));

export function VideoPage(props) {
    const classes = useStyles();
    const { id } = props.match.params;
    const { url, title, description, userName, photoUrl } = props.video;
    const video = url ? (
        <video
            className={classes.video}
            controls
            autoplay
            src={props.video.url}
            title={props.video.title}
        />
    ) : (
            <Grid item xs={12}>
                <Skeleton variant="rect" height={720} width={1280} key={id} />
            </Grid>
        );
    useEffect(() => {
        props.getVideo(id);
    }, []);
    return (
        <div>
            <Navbar />

            <Container component="main" disableGutters maxWidth="lg">
                <Grid container justify="center" spacing={0}>
                    <Card className={classes.card}>
                        {video}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Divider />
                            <Grid container className={classes.grid} alignItems="center">
                                <Avatar src={photoUrl} />
                                <Typography variant="h6" align="center">
                                    {userName}
                                </Typography>
                            </Grid>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>


        </div>
    );
}
function mapStateToProps(state) {
    return {
        video: state.video
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getVideo: (id) => dispatch(getVideoAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);