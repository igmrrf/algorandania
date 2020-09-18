import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CFD from "../../../static/vidoes/crypto.mp4";

const useStyles = makeStyles((theme) => ({
  invitation: {
    flexGrow: 1,
    padding: "5vw",
    textAlign: "center",
    background: "white",
  },
  button: {
    padding: "15px 25px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
    height: "68vh",
  },
  paperClip: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "left",
  },
  video: {
    width: "100%",
  },
  control: {
    padding: theme.spacing(2),
  },
  firstGrid: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Invitation() {
  const classes = useStyles();

  return (
    <div className={classes.invitation}>
      <Grid container>
        <Grid item xs={12} className={classes.firstGrid}>
          <Typography
            variant={"h3"}
            component={"h1"}
            className={classes.header}
          >
            Easiest & Most Powerful Assets
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction={"row"}>
            <Grid item sm={12} md={6}>
              <video className={classes.video} autoPlay loop muted>
                <source src={CFD} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid
                container
                justify={"center"}
                alignItems={"center"}
                className={classes.paper}
              >
                <Grid xs={12}>
                  <Typography variant={"h5"} component={"h4"}>
                    Explore an ever-expanding variety of cryptocurrencies, and
                    buy and invest the underlying asset on Blockchain Mining
                    Tech Cryptocurrency Investment Platform. Build your
                    crypto-based portfolio and enjoy benefits not offered by
                    most exchanges, such as near-immediate execution of market
                    orders.
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    className={classes.button}
                  >
                    Create an Account
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
