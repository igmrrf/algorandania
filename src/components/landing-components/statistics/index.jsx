import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
  root: {
    flowGrid: 1,
    padding: "10vw",
    textAlign: "center",
  },
  card: {
    color: green[500],
    margin: "10px",
    padding: "25px 15px",
    "&:hover": {
      transition: "0.5s ease-in-out",
      transform: "scale(1.05)",
      boxShadow: "0 0 5px 1px grey",
    },
  },
  volume: {
    color: green[500],
    border: "2px solid red",
  },
}));

const numbers = [
  {
    total: "2,92+",
    quantity: "TRIILLION USD IN TRADING VOLUME",
  },
  {
    total: "6,3+",
    quantity: "BILLION ORDERS EXECUTED",
  },
  {
    total: "363,5+",
    quantity: "MILLION TRADERS SERVED",
  },
  {
    total: "600+",
    quantity: "INSTRUMENTS OFFERED",
  },
];

const Statistics = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h3"} component={"h1"}>
        Our Numbers
      </Typography>
      <Grid container justify={"center"} alignItems={"center"}>
        {numbers.map((each) => (
          <Grid item xs={10} md={3}>
            <Paper className={classes.card}>
              <Typography variant={"h3"} component={"h3"}>
                {each.total}
              </Typography>
              <Typography variant={"h5"} component={"h4"} color={"primary"}>
                {each.quantity}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Statistics;
