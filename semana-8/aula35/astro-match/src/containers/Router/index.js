import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SwipeScreen from "../SwipeScreen";
import MatchScreen from "../MatchScreen";
import ProfileScreen from "../ProfileScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import "./style.css";

const StyledSection = styled.section`
    position: relative;

`;
const Router = props => {
    let page;
    switch (props.currentPage) {
        case "SwipeScreen":
            page = <SwipeScreen />;
            break;
        case "MatchScreen":
            page = <MatchScreen />;
            break;
        case "ProfileScreen":
            page = <ProfileScreen />;
            break;
        default:
            page = <h1>Error: invalid page selected</h1>;
            break;
    }
    return (
        <TransitionGroup className="slide">
            <CSSTransition
                key={props.currentPage}
                timeout={300}
                classNames="slide"
            >
                <StyledSection>{page}</StyledSection>
            </CSSTransition>
        </TransitionGroup>
    );
};

Router.propTypes = {
    currentPage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    currentPage: state.routes.currentPage
});

export default connect(mapStateToProps)(Router);
