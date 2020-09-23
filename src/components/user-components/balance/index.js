import React from "react";
import Grid from "@material-ui/core/Grid";
import CardBalance from "./card";
import { connect } from "react-redux";

const info = [
  {
    title: "Balance",
    amount: 300,
  },
  {
    title: "Deposits",
    amount: 100,
  },
  {
    title: "Profit",
    amount: 200,
  },
  {
    title: "Referral",
    amount: 50,
  },
];

function Balance({ balances }) {
  console.log(balances);
  const entries = Object.entries(balances);
  console.log(entries);
  return (
    <Grid container justify={"center"} alignItems={"center"} spacing={2}>
      {entries.map((card) => (
        <Grid key={card[0]} item xs={12} sm={6} md={3}>
          <CardBalance title={card[0]} amount={card[1].$numberDecimal} />
        </Grid>
      ))}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  balances: state.user.user.balances,
});

export default connect(mapStateToProps, null)(Balance);
