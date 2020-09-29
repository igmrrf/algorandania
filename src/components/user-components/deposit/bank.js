import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 500,
    padding: "10px 0",
  },
}));

export default function Bank() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardHeader title={"Deposit Using Bank Transfer/Deposit"} />
      <Typography>Bank name : FNB bank</Typography>
      <Typography>Account number: 62567971512</Typography>
      <Typography>Account type: current/cheque</Typography>
      <Typography>Account name: Tumisang Galoitsiwe</Typography>
      <Typography>Bank address:</Typography>
      <Typography>24 Beare St, Kuruman, 8460, South Africa</Typography>
      <Typography>Branch code: 230302</Typography>
      <Typography>Swift code: FIRNZAJJ</Typography>
      <Typography>Zip code: 230302</Typography>
      <Typography>Home address: 894 Voortrekker Road</Typography>
      <Typography>Kuruman</Typography>
      <Typography>NC</Typography>
      <Typography>8460</Typography>
      <Typography>South Africa</Typography>
    </div>
  );
}
