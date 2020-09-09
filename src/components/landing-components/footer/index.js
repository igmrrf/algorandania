import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5vw",
    background: "#3f51b5",
    color: "white",
  },
  copyright: {
    textAlign: "center",
    padding: "20px 0",
  },
}));

function LandingFooter() {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root}>
        <Typography variant={"h6"} component={"h6"}>
          Trade Responsibly: EF Worldwide Ltd makes no recommendations as to the
          merits of any financial product referred to in this advertisement,
          emails or its related websites and the information contained does not
          take into account your personal objectives, financial situation and
          needs. Therefore you should consider whether these products are
          appropriate in view of your objectives, financial situation and needs
          as well as considering the risks associated in dealing with those
          products. EF Worldwide Ltd recommends that you read the Client
          Agreement before making any decision concerning EF Worldwide Ltd
          financial products. Trading involves substantial risk of loss. Do not
          invest money you cannot afford to lose. EF Worldwide Ltd is not under
          the supervision of the JFSA, it is not involved with any acts
          considered to be offering financial products and solicitation for
          financial services, and this website is not aimed at residents in
          Japan.
        </Typography>
      </Grid>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.copyright}
      >
        Copyright © 2006-2020{" "}
        <Link color="inherit" href="https://blockchainminingtech.com">
          BlockChain Mining Tech - Your Crypto Investment Network, All rights
          reserved.
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
export default LandingFooter;
