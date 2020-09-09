import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MailIcon from "@material-ui/icons/Mail";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import Info from "@material-ui/icons/Info";
import Assessment from "@material-ui/icons/Assessment";
import IconButton from "@material-ui/core/IconButton";
import ListItemLink from "../link";
import Dns from "@material-ui/icons/Dns";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  buttonLinks: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  link: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));
const Links = [
  { primary: "BCMT", to: "/", icon: <Home /> },
  { primary: "Why Us", to: "/why-us", icon: <Assessment /> },
  { primary: "Plans", to: "/plans", icon: <AccountBalance /> },
  { primary: "FAQs", to: "/faqs", icon: <Info /> },
  { primary: "About Us", to: "/about-us", icon: <Dns /> },
  { primary: "Contact Us", to: "/contact-us", icon: <MailIcon /> },
];

export default function SideBarShared() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Links.map((link) => (
          <div>
            <ListItemLink
              to={link.to}
              primary={link.primary}
              icon={link.icon}
            />
            <Divider />
          </div>
        ))}
      </List>
      <List>
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
            Sign In
          </Button>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("left", true)}
          edge={false}
          color={"inherit"}
          aria-label={"menu"}
        >
          <Menu />
        </IconButton>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("Left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
