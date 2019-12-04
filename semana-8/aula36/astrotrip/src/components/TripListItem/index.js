import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import WorldIcon from "@material-ui/icons/VpnLock";

export default function TripListItem(props) {
    const handleDetail = () => {
        props.onClickDetail(props.trip.id);
    };
    const handleDelete = () => {
        props.onClickDelete(props.trip.id);
    };
    return (
        <ListItem button onClick={handleDetail}>
            <ListItemAvatar>
                <Avatar>
                    <WorldIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.trip.name} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
