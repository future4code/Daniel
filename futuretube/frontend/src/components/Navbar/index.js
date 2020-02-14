import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        margin: theme.spacing(1),
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.secondaryGradient} 90%)`
    },
    logoIcon: {
        fontSize: 30
    },
    navbar: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.navbarGradient} 90%)`
    }
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.navbar}>
            <Toolbar>
                <Avatar className={classes.logo}>
                    <PlayCircleOutlineIcon className={classes.logoIcon} />
                </Avatar>
                <Typography variant="h6" className={classes.title}>
                    FutureTube
                </Typography>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}