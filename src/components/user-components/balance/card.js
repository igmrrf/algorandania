import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Avatar, Box, Card, Typography, makeStyles } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    height: 48,
    width: 48,
  },
  button: {
    position: "absolute",
    bottom: 5,
    right: "20%",
    fontSize: "10px",
  },
}));

const CardBalance = ({ className, amount, title, ...rest }) => {
  const classes = useStyles();
  const currency = "$";

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography color="inherit" variant="h3">
            {currency}
            {amount}
          </Typography>
        </Box>
      </Box>
      {title === "deposits" ? (
        <Button
          variant={"contained"}
          color={"secondary"}
          className={classes.button}
          component={RouterLink}
          to={"/account/deposit"}
        >
          Deposit Now
        </Button>
      ) : null}
      <Avatar className={classes.avatar} color="inherit">
        <AttachMoneyIcon />
      </Avatar>
    </Card>
  );
};

CardBalance.propTypes = {
  className: PropTypes.string,
};

export default CardBalance;
