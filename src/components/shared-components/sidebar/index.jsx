import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import Info from "@material-ui/icons/Info";
import Gavel from "@material-ui/icons/Gavel";
import ContactMail from "@material-ui/icons/ContactMail";
import IconButton from "@material-ui/core/IconButton";
import ListItemLink from "../link";
import Dns from "@material-ui/icons/Dns";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 280,
  },
  fullList: {
    width: "auto",
  },
  buttonLinks: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    width: 240,
  },
  links: {},
  link: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: "large",
  },
}));
const Links = [
  { primary: "Home", to: "/", icon: <Home /> },
  { primary: "Contact Us", to: "/contact", icon: <ContactMail /> },
  { primary: "Plans", to: "/pricing", icon: <AccountBalance /> },
  { primary: "AML & KYC", to: "/kyc-policy", icon: <Info /> },
  { primary: "Privacy Policy", to: "/privacy-policy", icon: <Gavel /> },
  { primary: "Payment Policy", to: "/payment-policy", icon: <Dns /> },
];

export default function SideBarShared() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
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
      <List className={classes.links}>
        {Links.map((link) => (
          <div>
            <ListItemLink
              key={link.primary}
              to={link.to}
              primary={link.primary}
              icon={link.icon}
              className={classes.link}
            />
            <Divider />
          </div>
        ))}
      </List>
      <List>
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
          Sign In
        </Button>
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
