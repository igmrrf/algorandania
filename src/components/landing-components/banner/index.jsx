import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import btc from "../../../assets/landing-assets/img/trade.png";
import { MoneyOffRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: btc,
    backgroundColor: "rgb(18, 29, 51)",
    color: "white",
    padding: "10vw",
    textAlign: "center",
  },

  gridItem: {
    margin: theme.spacing(2),
  },
  bitcoin: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  button: {
    padding: "20px 40px",
  },
  crypto: {},
  cryptoItem: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      className={classes.root}
      style={{ backgroundImage: `url(${btc})`, backgroundPosition: "center" }}
    >
      <Grid item xs={12} md={9}>
        <Grid
          justify={"center"}
          alignItems={"center"}
          direction={"column"}
          className={classes.grid}
          spacing={3}
        >
          <Grid item xs={12} className={classes.gridItem}>
            <Typography
              variant={"h3"}
              component={"h1"}
              className={classes.text}
            >
              The World's Most Popular Way to Buy, Hold, and Use Crypto
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Typography variant={"h6"} component={"h1"}>
              Trusted by 53M Wallets - with Over $620 Billion in Transactions -
              Since 2013
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button
              variant={"contained"}
              color={"primary"}
              className={classes.button}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid
              container
              justify={"center"}
              alignItems={"center"}
              spacing={3}
              className={classes.crypto}
            >
              <Grid item xs={12} sm={5} md={3}>
                <Paper className={classes.cryptoItem}>
                  <Typography variant={"h6"} component={"h6"}>
                    <MoneyOffRounded /> BTC : $11,765.09
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={10} sm={5} md={3}>
                <Paper className={classes.cryptoItem}>
                  <Typography variant={"h6"} component={"h6"}>
                    <MoneyOffRounded /> ETH : $430.89
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={5} md={3}>
                <Paper className={classes.cryptoItem}>
                  <Typography variant={"h6"} component={"h6"}>
                    <MoneyOffRounded /> ALG : $0.52
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*<Grid item xs={12} md={5}>*/}
      {/*  <Paper*/}
      {/*    elevation={0}*/}
      {/*    component={"img"}*/}
      {/*    src={btc}*/}
      {/*    className={classes.bitcoin}*/}
      {/*  />*/}
      {/*</Grid>*/}
    </Grid>
  );
};

export default Banner;
