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
import { getReferralsStartAsync } from "../../redux/referral/referrals.actions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const headings = ["S/N", "Name", "Status", "Bonus"];

function Referrals({ referrals, getReferralsStartAsync }) {
  const classes = useStyles();
  useEffect(() => {
    getReferralsStartAsync();
  }, [getReferralsStartAsync]);

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
            {referrals.map((referral) => (
              <TableRow key={referral._id}>
                <TableCell component="th" scope="row">
                  {referral.sn}
                </TableCell>
                <TableCell>{referral.name}</TableCell>
                <TableCell>{referral.plan}</TableCell>
                <TableCell>{referral.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => ({
  getReferralsStartAsync: () => dispatch(getReferralsStartAsync()),
});

const mapStateToProps = (state) => ({
  referrals: state.referral.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
