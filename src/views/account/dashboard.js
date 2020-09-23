import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Balances from "../../components/user-components/balance";
import Performance from "../../components/user-components/performance";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const UserDashboard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      {/*<Header />*/}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Balances />
        </Grid>
        <Grid item xs={12}>
          <Performance />
        </Grid>
        <Grid item lg={8} xl={9} xs={12}>
          {/*<FinancialStats />*/}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
