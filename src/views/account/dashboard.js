import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Balances from "../../components/user-components/balance";
import Performance from "../../components/user-components/performance";
import OverviewWidget from "../../components/shared-components/Widgets/over-view";
import ForexWidget from "../../components/shared-components/Widgets/forex";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  grid: {
    flexDirection: "column",
  },
}));

const UserDashboard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Balances />
        </Grid>
        <Grid item xs={12}>
          <Performance />
        </Grid>
        <Grid container justify={"center"} alignItems={"center"} spacing={2}>
          <OverviewWidget />

          <ForexWidget />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
