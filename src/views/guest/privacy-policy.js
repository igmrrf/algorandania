import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import btc from "../../static/img/trade.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(8,9,21)",
    background: `url(${btc}) no-repeat center center fixed`,
    backgroundSize: "cover",
    color: "white",
    padding: "5vh 0",
  },
  heading: {
    paddingBottom: "10vh",
    textAlign: "center",
    fontWeight: "1000",
  },
  list: {
    background: "rgb(8,9,21)",
  },
}));

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant={"h2"} component={"p"} className={classes.heading}>
          Privacy Policy
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.list}>
        <List>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                1. When registering with blockchainminingtech.com, the Client
                shall provide certain identifying details including, inter alia,
                information aimed at preventing Money Laundering.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                1.1 The company collects and stores the following client data:
                email, encrypted password, client's name and address.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                2. Client undertakes to provide true, accurate and updated
                information about his identity and is obliged not to impersonate
                another person or legal entity. Any change in Client's
                identifying details must be notified to the Company immediately
                and in any case not later than the 30th day from the change in
                such details.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                2.1 Client's details which were provided and/or will be provided
                by the Client during his/her activity with
                blockchainminingtech.com may be used by the Company for sending
                Company's advertising content to the Client, unless the Client
                removes the mark approving the Company to do so. Such removal
                can be done when (i) opening an account or (ii) when receiving
                such advertising content or (iii) by logging in and going to My
                Account > Personal Details. The Client may also send to the
                Company, at any time, an e-mail to
                support@blockchainminingtech.com asking the Company to stop
                sending such advertising content. The aforesaid mark removal and
                /or email receipt by the Company will oblige the Company to
                cease sending advertisement content to the Client within seven
                business days.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                2.2 Client details which were provided and/or will be provided
                by the Client during his/her activity on the site, may be
                disclosed by the Company to official authorities. The company
                will make such disclosure only if required to do so by
                applicable law, regulation or court order and at the minimum
                required extent.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                2.3 Non-confidential information about the Client can be used by
                the Company in any advertising materials.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                3. As a precondition for performing Transactions on the Site,
                Client may be asked to provide certain identifying documents and
                any other documents required by the Company. If such documents
                are not provided, the Company can, at its sole discretion,
                freeze the Client's Account for any period of time as well as to
                permanently close the Account. Without prejudice to the above,
                the Company may, at its sole discretion, refuse to open an
                Account for any person or entity and for any reason, or no
                reason.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                4. In case a person registers with blockchainminingtech.com on
                behalf of a corporation or other business entity Client, such
                registration shall be considered as a representation by such
                person, that such person is authorized to bind the corporation
                or other business entity Client.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                5. The Company shall not divulge any private information of its
                Clients and former Clients unless the Client approved in writing
                such disclosure or unless such disclosure is required under
                applicable law or is required in order to verify Client's
                identity. The Clients' information is passed only to employees
                of the Company dealing with Client's Accounts. All such
                information shall be stored on electronic and physical storage
                media according to applicable law.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                6. Client confirms and agrees that all or part of the
                information concerning Client's Account and Transactions will be
                stored by the Company and may be used by the Company in case of
                dispute between Client and the Company.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                7. At its sole discretion, the Company may, but is not obliged,
                to review and inspect any information provided by the Client,
                for any purpose. It is manifestly stated, and by its signature
                hereunder Client also agrees, that the Company holds neither
                commitment nor responsibility to Client due to any aforesaid
                review or inspection of information.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                8. The Company will take measures to implement advanced data
                protection procedures and to update them from time to time for
                purpose of safeguarding Client's private information and
                Accounts.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                9. Upon registration with blockchainminingtech.com, Client will
                be asked to choose a username and password to be used by Client
                for each future login and for the performance of Transactions
                and use of the Company's Services. In order to protect Clients'
                privacy and operation with blockchainminingtech.com, sharing
                registration details (including without limitation, username and
                password) by Client with other persons or business entities is
                strictly prohibited. The Company shall not be held responsible
                for any damage or loss caused to Client due to improper use
                (including prohibited and unprotected use) or storage of such
                username and password, including any such use made by a third
                party, and whether or not known to or authorized by Client.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                10. Any use of blockchainminingtech.com with the Client's
                username and password is Client's sole responsibility. The
                Company shall not be held responsible for any such use,
                including for validation that Client is actually operating
                his/her Account.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                11. Client is obliged to forthwith notify the Company's client
                service of any suspicion of unauthorized use of the Account.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                12. The Company does not store or collect any Credit Card data.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                In accordance with the recommendations of Payment Card Industry
                Security Standards Council (PCI DSS), customer card details are
                protected using Transport Layer Security — TLS 1.2 and
                application layer with algorithm AES and key length of 256 bits.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                13. Cookies:
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Definition: A cookie is a small amount of data, which often
                includes a unique identifier, that is sent to your computer or
                mobile phone (referred to here as a «device») browser from a
                website's computer and is stored on your device's hard drive for
                tracking site usage. A website may send its own cookie to your
                browser if your browser's preferences allow it, but, to protect
                your privacy, your browser only permits a website to access the
                cookies it has already sent to you, not the cookies sent to you
                by other websites. Many websites do this whenever a user visits
                their website in order to track online traffic flows. A Client
                may choose to configure their browser to reject cookies by
                modifying their browser settings or preferences.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Our cookies policy: During any visit to blockchainminingtech.com
                website, the pages viewed, along with cookies, are downloaded to
                the Client's device. Cookies stored help determine the path the
                Client took on our site and they are used to anonymously
                identify recurring visits to the website and the most popular
                pages. However, the Company protects the Client's privacy by not
                storing the Client's names, personal details, emails, etc. Using
                cookies is an industry standard and is currently used by most
                major Websites. Stored cookies allow blockchainminingtech.com
                website to be more user-friendly and efficient for Clients by
                allowing the Company to learn which information is more valued
                by Clients versus which isn't.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
