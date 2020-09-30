import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import bitcoin from "../../../static/img/bitcoin.jpeg";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    height: 38,
    width: 38,
  },

  button: {
    margin: theme.spacing(1),
  },
}));

const Bitcoin = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid xs={12}>
        <CardHeader title={"Deposit Using Blockchain Wallet"} />
        <Typography>Deposit to Blockchain wallet generated for you</Typography>
        <Typography color={"textSecondary"}>
          34yrzburKiqu5hB3SMJ1TYdjRE99cHUcv3
        </Typography>
        <img
          className={classes.cover}
          src={bitcoin}
          width={240}
          title={"Generated Deposit Wallet Address"}
          alt={""}
        />
      </Grid>
      <Grid xs={12}>
        <CardHeader title={"Deposit Using These other Methods"} />
        <div>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"secondary"}
            component={"a"}
            target={"_blank"}
            rel={"no-referrer no-opener"}
            href={
              "https://play.google.com/store/apps/details?id=com.polehin.android"
            }
          >
            <Icon className="fab fa-google-play" style={{ marginRight: 10 }} />
            Wallet
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            component={"a"}
            target={"_blank"}
            rel={"no-referrer no-opener"}
            href={
              "https://play.google.com/store/apps/details?hl=en&id=co.bitx.android.wallet"
            }
          >
            <Icon className="fab fa-google-play" style={{ marginRight: 10 }} />{" "}
            Luno
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"secondary"}
            component={"a"}
            target={"_blank"}
            href={"https://www.coinmama.com"}
            rel={"no-referrer no-opener"}
          >
            <Icon className="fas fa-globe-africa" style={{ marginRight: 10 }} />{" "}
            Coinmama
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            style={{ background: yellow[900], color: "white" }}
            component={"a"}
            target={"_blank"}
            href={"https://www.bitcoin.com"}
            rel={"no-referrer no-opener"}
          >
            <Icon className="fas fa-globe-africa" style={{ marginRight: 10 }} />{" "}
            Bitcoin.com
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            component={"a"}
            rel={"no-referrer no-opener"}
            target={"_blank"}
            href={
              "https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en"
            }
          >
            <Icon className="fab fa-google-play" style={{ marginRight: 10 }} />
            Coinbase
          </Button>

          <Button
            className={classes.button}
            variant={"contained"}
            style={{ background: yellow[900], color: "white" }}
            component={"a"}
            target={"_blank"}
            href={
              "https://play.google.com/store/apps/details?id=io.cex.app.prod&hl=en"
            }
            rel={"no-referrer no-opener"}
          >
            <Icon className="fab fa-google-play" style={{ marginRight: 10 }} />{" "}
            CEX.io
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Bitcoin;
