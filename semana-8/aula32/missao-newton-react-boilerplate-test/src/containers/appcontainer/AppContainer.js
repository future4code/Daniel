import React from "react";
import TaskInput from "../../components/TaskInput";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import TaskList from "../../components/TaskList";
import Filters from './Filters'
export class AppContainer extends React.Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} lg={4} sm={6}>
          <Typography align="center" variant="h2">
            4 T A S K
          </Typography>
        </Grid>

        <Grid container justify="center" item xs={12} sm={6} lg={4}>
          <TaskInput />
        </Grid>
		<Grid item xs={12} lg={4} sm={6}>
          <Filters/>
        </Grid>
        <Grid container item xs={12} sm={6} lg={4}>
          <TaskList />
        </Grid>
      </Grid>
    );
  }
}
