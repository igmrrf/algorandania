import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

export default function Security() {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant={"h5"} component={"h5"}>
            Change Password
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="old_password"
              label="Old Password"
              name="old_password"
              type={"password"}
              autoComplete="old_password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="new_password"
              label="New Password"
              name="new_password"
              type={"password"}
              autoComplete="new_password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm_new_password"
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
