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

export default function Bank() {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Bank Details
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="account_name"
              label="Account Name"
              name="account_name"
              autoComplete="account_name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="account_number"
              label="Account Number"
              id="account_number"
              autoComplete="account_number"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bank_name"
              label="Bank Name"
              id="bank_name"
              autoComplete="bank_name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bank_code"
              label="Bank Code"
              id="bank_code"
              autoComplete="bank_code"
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
