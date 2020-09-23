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

function createData(sn, name, status, bonus) {
  return { sn, name, status, bonus };
}

const headings = ["S/N", "Name", "Status", "Bonus"];

const rows = [
  createData(1, "Frozen yoghurt", "Completed", 50),
  createData(2, "Ice cream sandwich", "Pending", 0.0),
  createData(3, "Eclair Cake", "Completed", 10.5),
  createData(4, "Cupcake Marshmallow", "Completed", 3.7),
  createData(5, "Gingerbread Sauce", "Pending", 16.0),
];

export default function Referrals() {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <Typography variant={"h3"} component={"h1"}>
          Referrals
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headings.map((heading, i) => (
                <TableCell key={i}>{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sn}>
                <TableCell component="th" scope="row">
                  {row.sn}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.bonus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
