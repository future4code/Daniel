import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/Navbar/index';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';
import VideoCard from '../../components/VideoCard/index';
import { connect } from 'react-redux';
import { getVideoFeedAction } from '../../actions/index';
import { push } from 'connected-react-router';


const useStyles = makeStyles(theme => ({
    cardsGrid: {
        marginTop: theme.spacing(2)
    }
}));
export function FeedPage(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => setPage(value);

    useEffect(() => {
        props.getFeed(1);
    }, []);

    useEffect(() => {
        props.getFeed(page);
    }, [page]);

    const onClickHandler = (id) =>{
        props.goToVideoDetail(id);
    }
    const { feed } = props;
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => {
        return (
            <Grid item>
                <Skeleton variant="rect" width={380} height={370} key={id}/>
            </Grid>);
    });
    const videos = feed.videos.map(video => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <VideoCard title={video.title} key={video.id} id={video.id} clickCallback={onClickHandler} />
            </Grid>
        );
    });
    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="lg">
                <Grid container spacing={4} className={classes.cardsGrid} >
                    {feed.videos.length ? videos : skeleton}
                    <Grid container justify="center" item xs={12}>
                        <Pagination count={5} size="large" page={page} onChange={handleChange} />
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        feed: state.feed
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getFeed: (page) => dispatch(getVideoFeedAction(page)),
        goToVideoDetail: (id) => dispatch(push(`/video/${id}`))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);