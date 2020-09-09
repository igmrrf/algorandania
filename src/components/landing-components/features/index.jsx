import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Icon from "@material-ui/core/Icon";
import AccountBalanceWalletRounded from "@material-ui/icons/AccountBalanceWalletRounded";
import Lock from "@material-ui/icons/Lock";
import green from "@material-ui/core/colors/green";
import { AddToHomeScreenRounded, FastForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: "10vh",
  },
  card: {
    width: "100%",
    height: "100%",
  },
  media: {
    margin: theme.spacing(2),
  },
  text: {
    textAlign: "left",
  },
  features: {
    margin: theme.spacing(2),
  },
  icon: {
    color: "blue",
    display: "block",
    margin: "auto",
    fontSize: "40px",
  },
}));

const info = [
  {
    title: "Security",
    body:
      "Our commitment to safety assures integrity, so you can concentrate on what’s important - investing in the markets.",
    icon: <Lock style={{ color: green[500], fontSize: 40 }} />,
  },
  {
    title: "Leverage",
    body:
      "Our commitment to safety assures integrity, so you can concentrate on what’s important - investing in the markets.",
    icon: (
      <AddToHomeScreenRounded style={{ color: green[500], fontSize: 40 }} />
    ),
  },
  {
    title: "Speed and reliable",
    body:
      "Our commitment to safety assures integrity, so you can concentrate on what’s important - investing in the markets.",
    icon: <FastForward style={{ color: green[500], fontSize: 40 }} />,
  },
];

const Features = () => {
  const classes = useStyles();
  return (
    <div id={"features"} className={classes.root}>
      <Grid
        container
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={10}>
          <Typography variant={"h3"} component={"h1"}>
            Get More
          </Typography>
          <Typography variant={"h6"} component={"h1"}>
            Discover why millions of users from over 140 countries choose to
            invest with BlockChain Tech Mining
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container wrap justify={"center"} alignItems={"center"}>
            {info.map((cad) => (
              <Grid item xs={12} md={3} className={classes.features}>
                <Card className={classes.card}>
                  <Icon className={classes.icon}>{cad.icon}</Icon>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cad.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.text}
                    >
                      {cad.body}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      Start Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Features;
