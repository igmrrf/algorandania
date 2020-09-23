import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(sn, type, amount, date, status) {
  return { sn, type, amount, date, status };
}
const rows = [
  createData(1, "Deposit", 600.0, "3rd January 2020", "Pending"),
  createData(2, "Withdrawal", 900.0, "24th May 2020", "Success"),
  createData(3, "Deposit", 160.0, "9th June 2020", "Pending"),
  createData(4, "Deposit", 300.7, "12th February 2020", "Success"),
  createData(5, "Withdrawal", 700.0, "24th May 2020", "Success"),
];
const headings = ["S/N", "Type", "Amount", "Date", "Status"];

export default function Transactions() {
  const classes = useStyles();

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
            {rows.map((row) => (
              <TableRow key={row.sn}>
                <TableCell component="th" scope="row">
                  {row.sn}
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
