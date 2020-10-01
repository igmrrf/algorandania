import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Box, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getTransactionsStartAsync } from "../../redux/transaction/transactions.actions";
import { useSnackbar } from "notistack";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  noTransactions: {
    padding: 20,
  },
});

const headings = ["S/N", "Type", "Amount", "Date", "Status"];

function Transactions({
  transactions,
  getTransactionsStartAsync,
  errorMessage,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  useEffect(() => {
    if (transactions.length < 1) getTransactionsStartAsync();
  }, [getTransactionsStartAsync]);

  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar(errorMessage, {
        variant: "warning",
      });
    }
  }, [errorMessage]);
  return (
    <Container>
      <Box>
        <Typography variant={"h3"} component={"h1"}>
          Transactions
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headings.map((heading) => (
                <TableCell key={heading}>{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {transactions.length > 1 ? (
            <TableBody>
              {transactions.map((transaction, i) => (
                <TableRow key={transaction._id}>
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>${transaction.amount}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <Box className={classes.noTransactions}>
              <Typography color={"textSecondary"}>
                You have no Transactions Record yet, Deposit and Withdrawals
                will be shown here
              </Typography>
              <Typography color={"textSecondary"}>
                Make a{" "}
                <Button
                  color={"secondary"}
                  variant={"outlined"}
                  to={"/account/deposit"}
                  component={RouterLink}
                >
                  Deposit
                </Button>{" "}
                Now to Start
              </Typography>
            </Box>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  transactions: state.transaction.data,
  errorMessage: state.transaction.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getTransactionsStartAsync: () => dispatch(getTransactionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
