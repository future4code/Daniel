import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { fetchTripDetail } from "../../actions/trips";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import WorldIcon from "@material-ui/icons/VpnLock";

const StyledHeader = styled(Grid)`
    width: 100vw;
`;
class DetailTrip extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        const { tripDetail, match, fetchTripDetail } = this.props;
        const token = window.localStorage.getItem("token");
        if (!token) {
            this.props.goLogin();
        } else {
            if (!tripDetail || tripDetail.id !== match.params.id) {
                fetchTripDetail(match.params.id);
            }
        }
    }

    render() {
        const candidatesListItem = this.props.tripDetail
            ? this.props.tripDetail.candidates.map((el, i) => {
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
                </StyledHeader>
                <Grid container justify="center" wrap="wrap">
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" gutterBottom>
                            Future X
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            gutterBottom
                        >
                            Detalhes
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Paper>
                            <Typography>
                                <ul>
                                    <li>Nome: Tararal</li>
                                    <li>Data: 10/10/2000</li>
                                    <li>Duração: 222 dias</li>
                                    <li>Planet: Marte</li>
                                    <li>
                                        Descrição: Uma viagem bem legal, na
                                        melhor época de marte
                                    </li>
                                </ul>
                            </Typography>
                        </Paper>
                        <Paper>
                            <List>{candidatesListItem}</List>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        );
    }
}
function mapStateToProps(state) {
    return {
        tripDetail: state.trips.tripDetail,
        allTrips: state.trips.trips
    };
}
function mapDispatchToProps(dispatch) {
    return {
        goLogin: () => dispatch(push(routes.login)),
        goHome: () => dispatch(push(routes.root)),
        goTripDetail: tripId => dispatch(push(`/trips/detail/${tripId}`)),
        fetchTripDetail: id => dispatch(fetchTripDetail(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTrip);
