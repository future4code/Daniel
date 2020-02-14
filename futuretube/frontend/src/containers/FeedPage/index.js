import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/Navbar/index';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import VideoCard from '../../components/VideoCard/index';

const mock = {
    videos: [
        {
            id: "01ba75d0-ed17-4fac-8676-1cc90349baa4",
            title: "VIDEO 6",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "10106f44-097b-46b1-9a7f-ade95b8d622f",
            title: "VIDEO 7",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "19a89ae4-4f88-46a5-b3ba-f62ab1d20266",
            title: "VIDEO 10",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "1a679ec3-984b-4f82-a6ad-3317f8cc5b6a",
            title: "VIDEO 17",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "22404a25-d88b-45bc-a615-cc6ff3e1c5a0",
            title: "VIDEO 5",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "3d4d5c5f-474a-4a56-a0ef-3e0d0f642e8d",
            title: "Guru Josh Project - Infinity (Maffalda Arrocha Flip)",
            url: "https://www.youtube.com/embed/BMaITvTiXYw?controls=0"
        },
        {
            id: "44b9b599-8425-40ca-99ae-ce457a67404a",
            title: "VIDEO 8",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "4c3c8918-1481-46c9-8f43-f14c8c698379",
            title: "VIDEO 19",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "60419677-e793-4eef-8f1f-7662354b235a",
            title: "VIDEO 3",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        },
        {
            id: "6782485f-9fe1-4d06-9f70-001e7266694c",
            title: "VIDEO 20",
            url: "https://www.youtube.com/watch?v=Q0oIoR9mLwc"
        }
    ]
}

const useStyles = makeStyles(theme => ({
    cardsGrid: {
        marginTop: theme.spacing(2)
    }
}));
export function FeedPage(props) {
    const classes = useStyles();
    const videos = mock.videos.map(video => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <VideoCard title={video.title} id={video.id} />
            </Grid>
        );
    })
    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="lg">
                <Grid container spacing={4} className={classes.cardsGrid} >
                    {videos}
                </Grid>
            </Container>
        </div>
    );
}