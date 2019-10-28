import React from "react";
import TaskCard from "./TaskCard";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  padding: 0 32px 0 12px;
`;
export default function TaskList() {
  return (
    <Grid item xs={12}>
      <StyledGrid item container alignItems="center" xs={12}>
        <TaskCard />
      </StyledGrid>
    </Grid>
  );
}
