import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBarShared from "../../shared-components/sidebar";
import { Link as RouterLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Settings from "@material-ui/icons/Settings";

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
  },
  borderless: {
    border: "none",
  },
}));

export default function LandingNavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color={"transparent"}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/why-us" color="inherit" component={RouterLink}>
            BlockChain.com
          </Link>
        </Typography>
        <Hidden smDown>
          <Paper className={classes.link} elevation={0}>
            {/*<Link to="#features" color="inherit" component={RouterLink}>*/}
            {/*  <Typography variant={"h6"}>WHY BCMT</Typography>*/}
            {/*</Link>*/}
            <Link to="/" color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>HOME</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to="/plans" color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>CONTACT</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to="/faqs" color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>KYC POLICY</Typography>
            </Link>
          </Paper>
          <Paper className={classes.link} elevation={0}>
            <Link to={"/about-us"} color="inherit" component={RouterLink}>
              <Typography variant={"h6"}>PRIVACY POLICY</Typography>
            </Link>
          </Paper>

          <Paper className={classes.link} elevation={0}>
            <Link to={"/contact-us"} component={RouterLink} color="inherit">
              <Typography variant={"h6"}>PAYMENT POLICY</Typography>
            </Link>
          </Paper>
          <div className={classes.links}>
            <Button
              variant={"contained"}
              color={"primary"}
              component={RouterLink}
              to={"/sign-up"}
              className={classes.buttonLinks}
            >
              Sign Up
            </Button>
            <Button
              variant={"contained"}
              color={"primary"}
              component={RouterLink}
              to={"/sign-in"}
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
