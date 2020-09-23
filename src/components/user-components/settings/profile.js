import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

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

function Profile({ user }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(true);
  console.log(user);

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Account Details
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              autoComplete="name"
              name="name"
              variant="outlined"
              fullWidth
              disable={edit}
              id="name"
              value={user.name.toUpperCase()}
              label="Name"
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              disabled={edit}
              value={user.email}
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="plan"
              label="Plan"
              disabled={edit}
              value={user.plan.toUpperCase()}
              name="plan"
              autoComplete="plan"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="mobile"
              value={user.mobile}
              label="Mobile Number"
              id="mobile"
              autoComplete="mobile"
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={user.gender}
              fullWidth
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
              value={user.country}
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
              Submit
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});
export default connect(mapStateToProps)(Profile);
