import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Remove from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  flex: 1;
`;
const StyledIconButton = styled(IconButton)``;
const StyledAdornmentIconButton = styled(IconButton)``;
export default function TaskCard() {
  return (
    <React.Fragment>
      <StyledIconButton color="primary">
        <Done />
      </StyledIconButton>
      <StyledTextField
        disabled
        value="Task"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <StyledAdornmentIconButton color="secondary">
                <Remove />
              </StyledAdornmentIconButton>
            </InputAdornment>
          )
        }}
      />
    </React.Fragment>
  );
}
