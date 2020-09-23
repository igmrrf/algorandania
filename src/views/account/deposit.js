import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import bitcoin from "../../static/img/bitcoin.jpeg";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
    height: 300,
  },
  card: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(3),
  },
}));

const Deposit = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.title}>
        <Typography variant={"h2"} component={"h1"}>
          Deposit
        </Typography>
      </Box>

      <Grid xs={12}>
        <Card className={classes.card}>
          <CardHeader title={"Deposit Using Blockchain Wallet"} />
          <Typography>
            Deposit to the Blockchain wallet generated for your deposit
          </Typography>
          <Typography color={"textSecondary"}>
            34yrzburKiqu5hB3SMJ1TYdjRE99cHUcv3
          </Typography>
          <CardMedia
            className={classes.cover}
            image={bitcoin}
            title={"Live from space album cover"}
          />
        </Card>
      </Grid>

      <Grid xs={12}>
        <Card className={classes.card}>
          <CardHeader title={"Deposit Using These other Methods"} />
          <div>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"primary"}
              component={"a"}
              rel={"no-referrer no-opener"}
              href={
                "https://play.google.com/store/apps/details?hl=en&id=co.bitx.android.wallet"
              }
            >
              Luno
            </Button>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"green"}
              component={"a"}
              rel={"no-referrer no-opener"}
              href={"https://play.google.com/store/apps/id?=com.changelly.app"}
            >
              Changelly
            </Button>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"green"}
              component={"a"}
              href={""}
              rel={"no-referrer no-opener"}
            >
              Cex.io
            </Button>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"primary"}
              component={"a"}
              target={"_blank"}
              rel={"no-referrer no-opener"}
              href={
                "https://play.google.com/store/apps/details?id=de.schildbach.wallet"
              }
            >
              Wallet
            </Button>
          </div>
        </Card>
      </Grid>
    </Container>
  );
};

export default Deposit;
