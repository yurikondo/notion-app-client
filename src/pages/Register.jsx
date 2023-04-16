import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Register = () => {
  return (
    <Box conponent="form">
      <TextField
        fullWidth
        id="username"
        label="お名前"
        margin="normal"
        name="username"
        required
      />
      <TextField
        fullWidth
        id="password"
        label="パスワード"
        margin="normal"
        name="password"
        type="password"
        required
      />{" "}
      <TextField
        fullWidth
        id="confirmPassword"
        label="確認用パスワード"
        margin="normal"
        name="confirmPassword"
        type="password"
        required
      />
    </Box>
  );
};

export default Register;
