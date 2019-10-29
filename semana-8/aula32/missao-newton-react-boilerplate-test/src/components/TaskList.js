import React from "react";
import TaskCard from "./TaskCard";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledGrid = styled(Grid)`
  padding: 0 32px 0 12px;
`;

function TaskList(props) {
  const allTasks = props.allTasks.map((el, i) => {
    return (
      <Grid item container>
        <TaskCard task={el} key={i} />
      </Grid>
    );
  });
  return (
    <Grid item xs={12}>
      <StyledGrid item container alignItems="center" xs={12}>
        {allTasks}
      </StyledGrid>
    </Grid>
  );
}
const mapStateToProps = state => {
  return {
    allTasks: state.tasks.tasks
  };
};

export default connect(mapStateToProps)(TaskList);
