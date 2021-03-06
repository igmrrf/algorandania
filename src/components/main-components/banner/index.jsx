import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import btc from "../../../static/img/trade.png";
import Icon from "@material-ui/core/Icon";
import { Link as RouterLink } from "react-router-dom";
import axios from "../../../utils/axios";

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
    background: "rgb(18,29,51)",
    color: "white",
  },
}));

const convertThousand = (num) => {
  const remainder = num % 1000;
  const main = Math.floor(num / 1000);
  if (main) {
    return `${main},${remainder.toFixed(2)}`;
  }
  return remainder.toFixed(2);
};

const Banner = () => {
  const classes = useStyles();
  const [BTC, setBTC] = useState("");
  const [YFI, setYFI] = useState("");
  const [ETH, setETH] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cyearn-finance&vs_currencies=usd"
      )
      .then((res) => {
        const data = res.data;
        setBTC(convertThousand(data.bitcoin.usd));
        setYFI(convertThousand(data["yearn-finance"].usd));
        setETH(convertThousand(data.ethereum.usd));
      });
  }, []);
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
              The World's Most Popular Way to Buy, Hold, Invest, Mine & trade
              Crypto
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
              to={"/register"}
              component={RouterLink}
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
              <Grid item xs={12} sm={5} md={4}>
                <Paper className={classes.cryptoItem}>
                  <Typography variant={"h6"} component={"h6"}>
                    <Icon
                      className={"fab fa-bitcoin"}
                      style={{ marginBottom: -5 }}
                    />{" "}
                    ${BTC}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={10} sm={5} md={3}>
                <Paper className={classes.cryptoItem}>
                  <Typography variant={"h6"} component={"h6"}>
                    <Icon
                      className={"fab fa-ethereum"}
                      style={{ marginBottom: -5 }}
                    />{" "}
                    ${ETH}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={5} md={3}>
                <Paper className={classes.cryptoItem}>
                  <Typography variant={"h6"} component={"h6"}>
                    <Icon
                      className={"fas fa-yen-sign"}
                      style={{ marginBottom: -5 }}
                    />{" "}
                    ${YFI}
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
