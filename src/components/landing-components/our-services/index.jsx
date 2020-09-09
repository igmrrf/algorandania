import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Ubuntu2 from "../../../assets/landing-assets/img/devices-main-desktop-light-small.webp";

import Button from "@material-ui/core/Button";
import CFD from "../../../assets/landing-assets/vidoes/crypto.mp4";

const useStyles = makeStyles((theme) => ({
  invitation: {
    flexGrow: 1,
    padding: "5vw",
    textAlign: "center",
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
  header: {
    marginTop: theme.spacing(4),
  },
}));

export default function Invitation() {
  const classes = useStyles();

  return (
    <div className={classes.invitation}>
      <Grid container direction={"row"}>
        <Grid item sm={12} md={6}>
          <Typography
            variant={"h3"}
            component={"h1"}
            className={classes.header}
          >
            The Market is in our DNA
          </Typography>
          <Typography variant={"h5"} component={"h4"}>
            Our award-winning, intuitive platforms are equipped with a suite of
            powerful tools to support your investments and ensure maximization
            of the your funds and potential profits. Our Platforms supports all
            devices making it easily available for everyone everywhere to have a
            share in the Cryptocurrency industry.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper
            elevation={0}
            component={"img"}
            src={Ubuntu2}
            className={classes.video}
          />
        </Grid>
      </Grid>
    </div>
  );
}
