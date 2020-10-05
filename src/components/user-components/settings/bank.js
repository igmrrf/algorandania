import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import {
  getBankDetailsStartAsync,
  bankCreateStartAsync,
  clearBankMessages,
} from "../../../redux/bank/bank.actions";
import { useSnackbar } from "notistack";

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

function Bank({
  bank,
  getBankDetailsStartAsync,
  isFetching,
  errorMessage,
  bankCreateStartAsync,
  message,
  clearBankMessages,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [disabled, setDisabled] = useState(false);
  const [details, setDetails] = useState({
    account_name: "",
    account_type: "",
    bank_name: "",
    bank_code: "",
    account_number: "",
  });

  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar(errorMessage, {
        variant: "warning",
      });
      clearBankMessages();
    }
  }, [errorMessage]);

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, {
        variant: "success",
      });
      clearBankMessages();
    }
  }, [message, bank]);

  useEffect(() => {
    if (bank.length < 1) getBankDetailsStartAsync();
  }, []);

  useEffect(() => {
    if (bank.user) {
      setDetails({
        account_name: bank.account_name,
        account_type: bank.account_type,
        bank_name: bank.bank_name,
        bank_code: bank.bank_code,
        account_number: bank.account_number,
      });
    }
  }, [bank]);

  const handleChange = (event) => {
    const { name, value } = event.target;
   
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    bankCreateStartAsync(details);
  };

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Bank Details
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              value={details.account_name}
              disabled={disabled}
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
              value={details.account_number}
              onChange={handleChange}
              name="account_number"
              disabled={disabled}
              label="Account Number"
              id="account_number"
              autoComplete="account_number"
            />
            <TextField
              variant="outlined"
              margin="normal"
              disabled={disabled}
              required
              fullWidth
              onChange={handleChange}
              value={details.account_type}
              name="account_type"
              label="Account Type"
              id="account_type"
              autoComplete="account_type"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              disabled={disabled}
              value={details.bank_name}
              name="bank_name"
              label="Bank Name"
              id="bank_name"
              autoComplete="bank_name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              disabled={disabled}
              fullWidth
              onChange={handleChange}
              value={details.bank_code}
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
              {isFetching ? (
                <>
                  <CircularProgress
                    size={20}
                    color={"secondary"}
                    style={{ marginBottom: -5 }}
                  />{" "}
                  Submitting
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
  isFetching: state.bank.isFetching,
  errorMessage: state.bank.errorMessage,
  bank: state.bank.data,
  message: state.bank.message,
});
const mapDispatchToProps = (dispatch) => ({
  getBankDetailsStartAsync: () => dispatch(getBankDetailsStartAsync()),
  bankCreateStartAsync: (data) => dispatch(bankCreateStartAsync(data)),
  clearBankMessages: () => dispatch(clearBankMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bank);
