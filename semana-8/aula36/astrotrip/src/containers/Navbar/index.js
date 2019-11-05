import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";


const StyledGrid = styled(Grid)`
    height: 78px;
`;
const StyledLink = styled.a`
    margin-left: 15px;
`;
function Navbar() {
    return (
        <StyledGrid item container alignItems="center" lg={8} xs={12}>
            <Grid item container xs justify="flex-start">
                Logo
            </Grid>
            <Grid item container xs justify="flex-end">
                <StyledLink href="">Home</StyledLink>
                <StyledLink href="">Viagens</StyledLink>
                <StyledLink href="">Login</StyledLink>
            </Grid>
        </StyledGrid>
    );
}

export default Navbar;
