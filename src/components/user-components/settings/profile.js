import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import {
  updateUserDetailsStartAsync,
  clearAuthMessages,
} from "../../../redux/auth/auth.actions";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";

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

function Profile({
  user,
  updateUserDetailsStartAsync,
  errorMessage,
  message,
  isFetching,
  clearAuthMessages,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    name: user.name.toUpperCase(),
    email: user.email,
    plan: user.plan.toUpperCase(),
    mobile: user.mobile,
    gender: user.gender,
    country: user.country,
  });
  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar(errorMessage, {
        variant: "warning",
      });
      clearAuthMessages();
    }
  }, [errorMessage]);

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, {
        variant: "success",
      });
      clearAuthMessages();
    }
  }, [message]);

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    updateUserDetailsStartAsync(state);
  };
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Account Details
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              autoComplete="name"
              name="name"
              variant="outlined"
              fullWidth
              disabled={true}
              id="name"
              onChange={handleChange}
              value={state.name}
              label="Name"
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              disabled={true}
              value={state.email}
              onChange={handleChange}
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="plan"
              label="Plan"
              disabled={true}
              onChange={handleChange}
              value={state.plan}
              name="plan"
              autoComplete="plan"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="mobile"
              value={state.mobile}
              onChange={handleChange}
              label="Mobile Number"
              id="mobile"
              autoComplete="mobile"
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={state.gender}
              fullWidth
              onChange={handleChange}
              name="gender"
              label="Gender"
              id="gender"
              disabled
              autoComplete="gender"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={state.country}
              onChange={handleChange}
              name="country"
              label="Country"
              disabled
              id="country"
              autoComplete="country"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isFetching ? (
                <>
                  <CircularProgress
                    size={20}
                    color={"secondary"}
                    style={{ marginBottom: -5 }}
                  />{" "}
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.data,
  errorMessage: state.auth.errorMessage,
  isFetching: state.auth.isFetching,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserDetailsStartAsync: (data) =>
    dispatch(updateUserDetailsStartAsync(data)),
  clearAuthMessages: () => dispatch(clearAuthMessages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
