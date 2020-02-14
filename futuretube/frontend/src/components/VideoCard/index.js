import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import gradient from 'random-gradient'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxHeight: "372px"
    },
    cardBg: {
        height: "300px",
        opacity: 0.5
    }
}));

export default function VideoCard(props) {
    const { title } = props;
    const classes = useStyles();
    const gradientBg = { background: gradient(Math.random().toString()), };
    const onClickHandler = ()=>{
        props.clickCallback(props.id);
    }
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={onClickHandler}>
                <div className={classes.cardBg} style={gradientBg} />
                <CardContent>
                    <Typography noWrap gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}