import React, { useState } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined";
import { connect } from "react-redux";
import { createTransactionStartAsync } from "../../redux/transaction/transactions.actions";
import { useSnackbar } from "notistack";

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
    width: 250,
    margin: theme.spacing(1, 2),
  },
  title: {
    textAlign: "center",
  },
}));

function Withdrawal({
  plan,
  createTransactionStartAsync,
  balance,
  isFetching,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [details, setDetails] = useState({
    wallet: "",
    confirm: "",
    amount: "",
    type: "Withdraw",
    plan: plan,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { amount, type, plan, wallet, confirm } = details;
    if (confirm !== wallet) {
      enqueueSnackbar("Wallet Addresses are not the same", { variant: "info" });
      return;
    } else if (amount >= balance) {
      enqueueSnackbar("Insufficient balance, please make a deposit", {
        variant: "info",
      });
      return;
    }
    createTransactionStartAsync({ amount, type, plan, wallet });
    enqueueSnackbar("Withdrawal is being Processed", {
      variant: "info",
    });
  };
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
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="bWallet"
                name="wallet"
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
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
                name="confirm"
                onChange={handleChange}
                autoComplete="Confirm_wallet"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                name="amount"
                label="Amount"
                type="text"
                id="amount"
                autoComplete="Amount"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" required color="primary" />
                }
                label="I accept the terms & conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
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
                Processing
              </>
            ) : (
              "Withdraw To Wallet"
            )}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled
          >
            Withdraw To Bank
          </Button>
        </form>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  plan: state.auth.data.plan,
  balance: state.auth.data.balances.balance.$numberDecimal,
  isFetching: state.transaction.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  createTransactionStartAsync: (data) =>
    dispatch(createTransactionStartAsync(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
