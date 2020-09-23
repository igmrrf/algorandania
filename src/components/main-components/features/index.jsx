import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Icon from "@material-ui/core/Icon";
import gold from "@material-ui/core/colors/yellow";
import FastForward from "@material-ui/icons/FastForward";
import SecurityOutlined from "@material-ui/icons/SecurityOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: "10vh",
  },
  card: {
    width: "100%",
    height: "250px",
    paddingTop: "30px",
  },
  media: {
    margin: theme.spacing(2),
  },
  text: {
    textAlign: "left",
  },
  features: {
    margin: theme.spacing(2),
    paddingTop: "5vh",
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
    title: "Privacy & Security",
    body:
      "Our commitment to safety assures integrity, so you can concentrate on what’s important - investing in the markets.",
    icon: <SecurityOutlined style={{ color: gold[800], fontSize: 40 }} />,
  },
  {
    title: "Ease of Access",
    body:
      "Our platform is customized to make it fit better to your needs and exploration.",
    icon: <SecurityOutlined style={{ color: gold[800], fontSize: 40 }} />,
  },
  {
    title: "24/7 Customer Support",
    body:
      "Our team of professionals and Investment experts are always here to support you.",
    icon: <FastForward style={{ color: gold[800], fontSize: 40 }} />,
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
          <Typography
            variant={"h3"}
            component={"h1"}
            style={{ marginBottom: "20px" }}
          >
            Why BCMT?
          </Typography>
          <Typography variant={"h6"} component={"h1"}>
            Discover why millions of users from over 140 countries choose to
            invest with Blockchain Tech Mining
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            wrap={"wrap"}
            justify={"center"}
            alignItems={"center"}
          >
            {info.map((cad) => (
              <Grid
                item
                xs={12}
                md={3}
                key={cad.title}
                className={classes.features}
              >
                <Card className={classes.card}>
                  <Icon className={classes.icon}>{cad.icon}</Icon>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cad.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                      className={classes.text}
                    >
                      {cad.body}
                    </Typography>
                  </CardContent>
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
