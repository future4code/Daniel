import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },

    white: {
        background: "transparent",
        boxShadow: "none",
        color: "white"
    },
    black: {
        background: "transparent",
        boxShadow: "none",
        color: "black"
    }
};
function Navbar(props) {
    const { classes,color } = props;
    return (
        <AppBar position="static" className={classes[color]}>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.grow}
                >
                    FutureX
                </Typography>
                <Button color="inherit" onClick={props.onClickHome}>
                    Home
                </Button>
                <Button color="inherit" onClick={props.onClickLogin}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
export default withStyles(styles)(Navbar);
