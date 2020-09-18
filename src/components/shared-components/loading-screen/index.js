import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import BTC from "../../../static/img/btc.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "rgb(18,29,51)",
    color: "white",
    position: "absolute",
    zIndex: "9999",
    height: "100vh",
    width: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "50%",
    maxWidth: "400px",
    animation: `$myEffect 3000ms infinite ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "50%": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>Loading...</Typography>
    </Box>
  );
};
export default LoadingScreen;
