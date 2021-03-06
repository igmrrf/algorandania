import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBarShared from "../../../components/shared-components/sidebar";
import { Link as RouterLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import br from "../../../static/img/br.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(5),
  },
  buttonLinks: {
    margin: theme.spacing(1, 1.5),
  },
  link: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: "none",
    border: "none",
    color: "white",
  },
  borderless: {
    border: "none",
  },
}));

export default function LandingNavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ background: "rgb(18,29,51)" }}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <img src={br} alt={""} style={{ height: "" }} />
        </Typography>
        <Hidden smDown>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Home</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/contact"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Contact</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/pricing"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Pricing</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/kyc-policy"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>KYC Policy</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/privacy-policy"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>Privacy Policy</Typography>
            </Link>
          </Paper>

          <Paper className={classes.link} elevation={0}>
            <Link to={"/payment-policy"} component={RouterLink} color="inherit">
              <Typography variant={"h6"}>Payment Policy</Typography>
            </Link>
          </Paper>
          <div className={classes.links}>
            <Button
              variant={"contained"}
              color={"primary"}
              component={RouterLink}
              to={"/register"}
              className={classes.buttonLinks}
            >
              Sign Up
            </Button>
            <Button
              variant={"contained"}
              color={"primary"}
              component={RouterLink}
              to={"/login"}
              className={classes.buttonLinks}
            >
              Login
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <SideBarShared />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
