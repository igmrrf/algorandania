import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Crypto from "../../shared-components/Widgets/crypto";

const useStyles = makeStyles((theme) => ({
  invitation: {
    flexGrow: 1,
    padding: "10vh 5vw",
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
}));

export default function Coins() {
  const classes = useStyles();

  return (
    <div className={classes.invitation}>
      <Grid item xs={12} className={classes.firstGrid}>
        <Typography variant={"h3"} component={"h1"}>
          Access to all Crypto Tech
        </Typography>
        <Typography variant={"subtitle1"} component={"p"}>
          Have complete access and control over your invested assets and can
          swap assets feasibly with relative ease
        </Typography>
      </Grid>

      <Crypto />
    </div>
  );
}
