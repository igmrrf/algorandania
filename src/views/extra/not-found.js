import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  grid: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  404: {
    minHeight: "90vh",
    minWidth: "90vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(blue 20%, red 100%,blue 20%)",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"}>
      <Grid className={classes.grid}>
        <Paper className={classes["404"]} elevation={6}>
          <Typography variant={"h1"} component={"h1"}>
            404
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default NotFound;
