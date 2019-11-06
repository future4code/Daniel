import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import planet from "../../imgs/undraw_startman1_h7l9.svg";
import Grid from "@material-ui/core/Grid";

const StyledImgPlanet = styled.img`
    height: 200px;
`;
const StyledCard = styled(Card)`
    width: 300px;
    margin-right: 15px;
    margin-top: 15px;
`;
export default function TripCard(props) {
    return (
        <StyledCard>
            <CardMedia>
                <Grid container justify="center">
                    <StyledImgPlanet src={planet} />
                </Grid>
            </CardMedia>
            <CardContent>
                <Typography variant="h4" align="center">
                    {props.trip.name}
                </Typography>
                <Typography align="center">{props.trip.description}</Typography>
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Button size="small" color="primary" onClick={()=>{props.onClickForm()}}>
                        Inscrever
                    </Button>
                </Grid>
            </CardActions>
        </StyledCard>
    );
}
