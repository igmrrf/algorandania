import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Avatar, Box, Card, Typography, makeStyles } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles((theme) => ({
  root: {
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
