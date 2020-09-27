import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { createUserStartAsync } from "../../redux/auth/auth.actions";
import p2p from "../../static/img/p2pblue.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${p2p}) no-repeat center center`,
    backgroundColor: "rgba(18,29,51,1)",
    backgroundSize: "cover",
  },
  paper: {
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
  },
}));

function SignUp({ createUserStartAsync }) {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    mobile: "",
    country: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Help");
    const data = user;
    createUserStartAsync(data);
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs" style={{ background: "white" }}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="name"
                  label="Last Name & First Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={handleChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={handleChange}
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel htmlFor="gender_selector">Gender</InputLabel>
                  <Select
                    native
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                      name: "gender",
                      id: "gender_selector",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel htmlFor="country_selector">Country</InputLabel>
                  <Select
                    native
                    onChange={handleChange}
                    label="Country"
                    inputProps={{
                      name: "country",
                      id: "country_selector",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Nigeria"}>Nigeria</option>
                    <option value={"USA"}>USA</option>
                    <option value={"Ben"}>Ben"</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*    variant="outlined"*/}
              {/*    required*/}
              {/*    fullWidth*/}
              {/*    onChange={handleChange}*/}
              {/*    name="confirm_password"*/}
              {/*    label="Confirm Password"*/}
              {/*    type="password"*/}
              {/*    id="confirm_password"*/}
              {/*    autoComplete="confirm_password"*/}
              {/*  />*/}
              {/*</Grid>*/}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I accept the terms and conditions that bound the use of Blockchain Mining Tech"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={"/login"} component={RouterLink} variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createUserStartAsync: (createDetails) =>
    dispatch(createUserStartAsync(createDetails)),
});
export default connect(null, mapDispatchToProps)(SignUp);
