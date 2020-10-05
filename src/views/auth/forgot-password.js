import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import p2p from "../../static/img/p2pyellow.svg";
import { Link as RouterLink } from "react-router-dom";
import yellow from "@material-ui/core/colors/yellow";
import { forgotPasswordStartAsync } from "../../redux/auth/auth.actions";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${p2p})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: yellow[900],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ForgotPassword({
  isFetching,
  forgotPasswordStartAsync,
  errorMessage,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar(errorMessage, {
        variant: "warning",
      });
    }
  }, [errorMessage, enqueueSnackbar]);

  const handleSubmit = (event) => {
    event.preventDefault();
    forgotPasswordStartAsync(email);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Enter email associated with your account. A recovery link will be
            send to your to change your password. Confirm your email address
            before requesting.
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              OnChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isFetching ? (
                <CircularProgress size={30} color={"secondary"} />
              ) : (
                "Send Mail"
              )}
            </Button>

            <Grid>
              <Link to={"/register"} component={RouterLink} variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  errorMessage: state.auth.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  forgotPasswordStartAsync: (createDetails) =>
    dispatch(forgotPasswordStartAsync(createDetails)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
