import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";
import { Eco } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flowGrid: 1,
    padding: "5vw",
    textAlign: "center",
  },
  card: {
    margin: "10px",
    textAlign: "center",
    padding: "25px 15px",
    "&:hover": {
      transition: "0.5s ease-in-out",
      transform: "scale(1.05)",
    },
  },
  volume: {
    color: green[500],
    border: "2px solid red",
  },
}));

const awards = [
  {
    award: "Best Crypo Broker",
    year: "2017",
    event: "The Forex Expo Dubai",
  },
  {
    award: "Most Innovative Crypto Investments",
    year: "2018",
    event: "World Finance Markets Awards",
  },
  {
    award: "Best APAC Region Provider",
    year: "2017",
    event: "ADVFN international Financial Awards",
  },
  {
    award: "Most Transparent Cryptocurrency Investment Platform",
    year: "2016",
    event: "Crypto-Awards",
  },
  {
    award: "Best Crypto Service Provider",
    year: "2017",
    event: "FXWorld",
  },
];

const Awards = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h3"} component={"h1"}>
        <Eco style={{ fontSize: 40, color: "green" }} /> 18 International Awards
        <Eco style={{ fontSize: 40, color: "green" }} />
      </Typography>
      <Grid container justify={"center"} alignItems={"center"}>
        {awards.map((award) => (
          <Grid item xs={10} md={2} xl={2} key={award.award}>
            <Paper className={classes.card} elevation={1}>
              <Typography variant={"h6 "} component={"h3"}>
                {award.award}
              </Typography>
              <Typography variant={"h6"} component={"h4"} color={"primary"}>
                {award.year}
              </Typography>
              <Typography
                variant={"h6"}
                component={"h4"}
                style={{ fontWeight: "lighter" }}
              >
                {award.event}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Awards;
