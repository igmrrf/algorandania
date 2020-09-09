import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CFD from "../../../assets/landing-assets/vidoes/crypto.mp4";
import Crypto from "../../Widgets/crypto";

const useStyles = makeStyles((theme) => ({
  invitation: {
    flexGrow: 1,
    padding: "5vw",
    color: "white",
    textAlign: "center",
  },
  button: {
    padding: "15px 25px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
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
    fontWeight: "600",
  },
}));

export default function Coins() {
  const classes = useStyles();

  return (
    <div className={classes.invitation}>
      <Grid item xs={12} className={classes.firstGrid}>
        <Paper elevation={0}>
          <Typography
            variant={"h3"}
            component={"h1"}
            className={classes.header}
          >
            Full Access to Crypto Currencies
          </Typography>
        </Paper>
      </Grid>
      <Grid container direction={"row"}>
        <Grid item sm={12} md={6}>
          <Paper elevation={0} className={classes.paperClip}>
            <Grid
              container
              justify={"center"}
              alignItems={"center"}
              className={classes.paper}
            >
              <Grid xs={12}>
                <Typography variant={"h5"} component={"h4"}>
                  Have complete access and control over your invested assets and
                  can swap assets feasibly with relative ease
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
          </Paper>
        </Grid>
        <Crypto />
      </Grid>
    </div>
  );
}
