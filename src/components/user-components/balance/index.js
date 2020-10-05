import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CardBalance from "./card";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

function Balance({ balances }) {
  const entries = Object.entries(balances);

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (balances.deposits.$numberDecimal < 1)
      enqueueSnackbar(
        "You haven't made any deposit, make a deposit to start earning",
        { variant: "info" }
      );
  }, [balances]);

  return (
    <Grid container justify={"center"} alignItems={"center"} spacing={2}>
      {entries.map((card) => {
        return (
          <Grid key={card[0]} item xs={12} sm={6} md={3}>
            <CardBalance title={card[0]} amount={card[1].$numberDecimal} />
          </Grid>
        );
      })}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  balances: state.auth.data.balances,
});

export default connect(mapStateToProps, null)(Balance);
