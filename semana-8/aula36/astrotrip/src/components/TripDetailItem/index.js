import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CandidateIcon from "@material-ui/icons/AccessibilityNew";
import Button from "@material-ui/core/Button";

export default class TripDetailItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }
    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
    handleClickApprove = () => {
        this.props.onApprove(this.props.candidate.id);
    };
    handleClickReprove = () => {
        this.props.onReprove(this.props.candidate.id);
    };
    render() {
        const {
            name,
            age,
            profession,
            applicationText,
            country
        } = this.props.candidate;
        return (
            <React.Fragment>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <CandidateIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={name} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <ul>
                        <li>Profissão: {profession}</li>
                        <li>Idade: {age}</li>
                        <li>Nacionalidade: {country}</li>
                        <li>Motivação: {applicationText}</li>
                    </ul>
                    <Button
                        variant="outlined"
                        onClick={this.handleClickApprove}
                    >
                        Aprovar
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={this.handleClickReprove}
                    >
                        Reprovar
                    </Button>
                </Collapse>
            </React.Fragment>
        );
    }
}
