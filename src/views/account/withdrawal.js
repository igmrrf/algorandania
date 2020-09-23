import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    display: "inline-block",
    textAlign: "center",
    paddingTop: theme.spacing(1),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    display: "inline-block",
    width: 300,
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    textAlign: "center",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main">
      <Box className={classes.title}>
        <Typography variant={"h3"} component={"h1"}>
          Withdrawal
          <Avatar className={classes.avatar}>
            <MonetizationOnOutlined />
          </Avatar>
        </Typography>
      </Box>
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Blockchain Wallet
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="bWallet"
                name="blockchain_wallet"
                variant="outlined"
                required
                fullWidth
                id="blockchain_wallet"
                label="Blockchain Wallet"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Confirm Wallet"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="amount"
                label="Amount"
                type="text"
                id="amount"
                autoComplete="Amount"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I understand the terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Withdraw
          </Button>
        </form>
      </div>

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Bank Account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="bname"
                name="bank_name"
                variant="outlined"
                required
                fullWidth
                id="bank_name"
                label="Bank Name"
              />
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="bname"
                name="bank_code"
                variant="outlined"
                required
                fullWidth
                id="bank_code"
                label="Bank Code"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bank_account_name"
                label="Bank Account Name"
                name="bank_account_name"
                autoComplete="bName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="bank_account_number"
                label="Bank Account Number"
                type="text"
                id="bank_account_number"
                autoComplete="bNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I understand the terms and conditions"
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
            Withdraw
          </Button>
        </form>
      </div>
    </Container>
  );
}
