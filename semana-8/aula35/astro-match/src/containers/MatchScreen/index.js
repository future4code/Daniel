import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar } from "../../components/AppBar";
import { mdiAccountSwitch } from "@mdi/js";
import { updateCurrentPage } from "../../actions/route";
import { getMatches } from "../../actions/profiles";
import { Avatar, List, ListItem, ListText, MatchIcon } from "./styled";
import styled from 'styled-components'

const StyledDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`
class MatchScreen extends Component {
    componentDidMount() {
        if (this.props.getMatches) {
            this.props.getMatches();
        }
    }

    render() {
        const { goToSwipeScreen, matches } = this.props;

        return (
            <StyledDiv>
                <AppBar
                    leftAction={
                        <MatchIcon
                            path={mdiAccountSwitch}
                            size={1}
                            onClick={goToSwipeScreen}
                        />
                    }
                />
                <List>
                    {matches &&
                        matches.map(match => (
                            <ListItem key={match.name}>
                                <Avatar src={match.photo} />
                                <ListText>{match.name}</ListText>
                            </ListItem>
                        ))}
                </List>
            </StyledDiv>
        );
    }
}

MatchScreen.propTypes = {
    goToSwipeScreen: PropTypes.func.isRequired,
    getMatches: PropTypes.func.isRequired,
    matches: PropTypes.array
};

const mapStateToProps = state => ({
    matches: state.profiles.matches
});

const mapDispatchToProps = dispatch => ({
    goToSwipeScreen: () => dispatch(updateCurrentPage("SwipeScreen")),
    getMatches: () => dispatch(getMatches())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchScreen);
