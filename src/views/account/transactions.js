import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Box, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getTransactionsStartAsync } from "../../redux/transaction/transactions.actions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const headings = ["S/N", "Type", "Amount", "Date", "Status"];

function Transactions({ transactions, getTransactionsStartAsync }) {
  const classes = useStyles();
  useEffect(() => {
    getTransactionsStartAsync();
  }, [getTransactionsStartAsync]);

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
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell component="th" scope="row">
                  {transaction.sn}
                </TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  transactions: state.transaction.data,
});

const mapDispatchToProps = (dispatch) => ({
  getTransactionsStartAsync: () => dispatch(getTransactionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
