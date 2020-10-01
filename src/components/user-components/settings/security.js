import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useSnackbar } from "notistack";
import { updateAuthPasswordStartAsync } from "../../../redux/auth/auth.actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Security({ updateAuthPasswordStartAsync, errorMessage }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
    newPassword: "",
  });

  const handleChange = (event) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar(errorMessage, {
        variant: "warning",
      });
    }
  }, [errorMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Help");
    updateAuthPasswordStartAsync(passwords);
  };

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant={"h5"} component={"h5"}>
            Change Password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="old_password"
              label="Old Password"
              name="password"
              type={"password"}
              onChange={handleChange}
              autoComplete="old_password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              id="newPassword"
              label="New Password"
              name="newPassword"
              type={"password"}
              autoComplete="new_password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              id="confirm_new_password"
              autoComplete="confirm_new_password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Change
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  updateAuthPasswordStartAsync: (data) =>
    dispatch(updateAuthPasswordStartAsync(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Security);
