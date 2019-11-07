import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import WorldIcon from "@material-ui/icons/VpnLock";
import Paper from "@material-ui/core/Paper";
import { fetchAllTrips } from "../../actions/trips";

const StyledHeader = styled(Grid)`
    width: 100vw;
    min-height: 100vh;
`;

class ListTrip extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        const token = window.localStorage.getItem("token");
        if (!token) {
            this.props.goLogin();
        } else {
            if (!this.props.allTrips) {
                this.props.fetchTrips();
            }
        }
    }
    handleClickDetail = id => {
        this.props.goTripDetail(id);
    };
    render() {
        const tripListItem = this.props.allTrips
            ? this.props.allTrips.map((el, i) => {
                  console.log(el, i);
                  return (
                      <ListItem
                          button
                          onClick={() => this.handleClickDetail(el.id)}
                          key={i}
                      >
                          <ListItemAvatar>
                              <Avatar>
                                  <WorldIcon />
                              </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={el.name} />
                          <ListItemSecondaryAction>
                              <IconButton aria-label="Delete">
                                  <DeleteIcon />
                              </IconButton>
                          </ListItemSecondaryAction>
                      </ListItem>
                  );
              })
            : "";
        return (
            <section>
                <StyledHeader container justify="center">
                    <Grid item xs={12} lg={8}>
                        <Navbar
                            onClickHome={() => {
                                this.props.goHome();
                            }}
                            onClickLogin={() => {
                                this.props.goLogin();
                            }}
                            color="black"
                        />
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                align="center"
                                gutterBottom
                            >
                                Future X
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                align="center"
                                gutterBottom
                            >
                                Todas viagens
                            </Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Paper>
                                <List>{tripListItem}</List>
                            </Paper>
                        </Grid>
                    </Grid>
                </StyledHeader>
            </section>
        );
    }
}
function mapStateToProps(state) {
    return {
        allTrips: state.trips.trips
    };
}
function mapDispatchToProps(dispatch) {
    return {
        goLogin: () => dispatch(push(routes.login)),
        goHome: () => dispatch(push(routes.root)),
        goTripDetail: tripId => dispatch(push(`/trips/detail/${tripId}`)),
        fetchTrips: () => dispatch(fetchAllTrips())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTrip);
