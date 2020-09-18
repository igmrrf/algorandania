import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link as RouterLink } from "react-router-dom";
import ChatBubbleOutlineOutlined from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PhoneAndroidOutlined from "@material-ui/icons/PhoneAndroidOutlined";
import MailOutlineRounded from "@material-ui/icons/MailOutlineRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "rgb(8,19,41)",
    padding: "5vw",
    color: "white",
  },
  copyright: {
    textAlign: "center",
    padding: "20px 0",
    color: "white",
    fontWeight: "600",
    background: "rgb(18,29,51)",
  },
}));

function LandingFooter() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid xs={12} item md={3}>
          <Typography variant={"h6"} component={"h3"}>
            QUICK LINKS
          </Typography>
          <Link to="/" color="inherit" component={RouterLink}>
            <Typography variant={"subtitle2"}>Home</Typography>
          </Link>
          <Link to="/plans" color="inherit" component={RouterLink}>
            <Typography variant={"subtitle2"}>Contact</Typography>
          </Link>
          <Link to="/faqs" color="inherit" component={RouterLink}>
            <Typography variant={"subtitle2"}>KYC Policy</Typography>
          </Link>

          <Link to={"/about-us"} color="inherit" component={RouterLink}>
            <Typography variant={"subtitle2"}>Privacy Policy</Typography>
          </Link>

          <Link to={"/contact-us"} component={RouterLink} color="inherit">
            <Typography variant={"subtitle2"}>Payment Policy</Typography>
          </Link>
        </Grid>
        <Grid xs={12} item md={4}>
          <Typography variant={"h6"} component={"h3"}>
            CONTACT
          </Typography>
          <Typography variant={"subtitle2"}>
            <MailOutlineRounded /> support@blockchainminingtech.com
          </Typography>
          <Typography variant={"subtitle2"}>
            <ChatBubbleOutlineOutlined /> Live Chat
          </Typography>
          <Typography variant={"subtitle2"}>
            <PhoneAndroidOutlined /> +1 (443) 786 2234
          </Typography>
        </Grid>
        <Grid xs={12} item md={5}>
          <Typography variant={"h6"} component={"h3"}>
            FIRST IN CRYPTOCURRENCY
          </Typography>
          <Typography variant={"subtitle2"}>
            The Blockchain.com is one of the leading platforms in the United
            States offering binary options, Forex and spreads. Regulated by the
            CFTC and based in New York. It is also regulated by the IFSC of
            Belize, as well as the Cyprus Securities and Exchange Commission.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "10vh" }}>
          <Typography variant={"h6"} component={"h3"}>
            COPYRIGHT LAWS
          </Typography>
          <Typography variant={"subtitle2"} component={"p"}>
            All materials and services provided on this site are subject to
            copyright and belong to “BLOCKCHAIN MINING TECH(BCMT)”. Any use of
            materials of this website must be approved by an official
            representative of “BCMT” or in line with the regulations under the
            "Privacy Policy, and contain a link to the original resource.
            Third-party companies do not have the right to use materials of this
            website as well as any distorted writing of “BLOCKCHAIN MINING
            TECH”. In case of violation, they will be prosecuted in accordance
            with legislation of the intellectual property protection.
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.copyright}
      >
        Copyright © 2006-2020{" "}
        <Link color="inherit" href="https://blockchainminingtech.com">
          BlockChain Mining Tech All rights reserved.
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
export default LandingFooter;
