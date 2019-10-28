import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledInput = styled(TextField)`
    border-radius: 3px;
    width: 100%;
`
export default function TaskInput() {
  return (
    <React.Fragment>
      <StyledInput
        id="outlined-email-input"
        label="T A S K"
        type="text"
        name="taskinput"
        margin="normal"
        variant="outlined"
      />
    </React.Fragment>
  );
}
