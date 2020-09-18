import React from "react";
import Box from "@material-ui/core/Box";
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

const KYCPolicy = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid>
        <Typography variant={"h2"} component={"p"} className={classes.heading}>
          AML & KYC Policy
        </Typography>
      </Grid>
      <Box className={classes.list}>
        <List>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                It is the policy of Blockchain Mining Tech and its affiliates,
                (hereinafter «The Company») to prohibit and actively pursue the
                prevention of money laundering and any activity that facilitates
                money laundering or the funding of terrorist or criminal
                activities. The Company requires its officers, employees and
                affiliates to adhere to these standards in preventing the use of
                its products and services for money laundering purposes.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 2. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                For the purposes of the Policy, money laundering is generally
                defined as engaging in acts designed to conceal or disguise the
                true origins of criminally derived proceeds so that the unlawful
                proceeds appear to have been derived from legitimate origins or
                constitute legitimate assets.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 3. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Generally, money laundering occurs in three stages. Cash first
                enters the financial system at the «placement» stage, where the
                cash generated from criminal activities is converted into
                monetary instruments, such as money orders or traveler's checks,
                or deposited into accounts at financial institutions. At the
                «layering» stage, the funds are transferred or moved into other
                accounts or other financial institutions to further separate the
                money from its criminal origin. At the «integration» stage, the
                funds are reintroduced into the economy and used to purchase
                legitimate assets or to fund other criminal activities or
                legitimate businesses. Terrorist financing may not involve the
                proceeds of criminal conduct, but rather an attempt to conceal
                the origin or intended use of the funds, which will later be
                used for criminal purposes.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 4. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Each employee of The Company, whose duties are associated with
                the provision of products and services of The Company and who
                directly or indirectly deals with the clientele of The Company,
                is expected to know the requirements of the applicable laws and
                regulations which affect his or her job responsibilities, and it
                shall be the affirmative duty of such employee to carry out
                these responsibilities at all times in a manner that complies
                with the requirements of the relevant laws and regulations.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The laws and regulations include, but not limited to: «Customer
                Due Diligence for Banks» (2001) and «General Guide to Account
                Opening and Customer Identification» (2003) of Basel Committee
                of banking Supervision, Forty + nine Recommendations for Money
                Laundering of FATF, USA Patriot Act (2001), Prevention and
                Suppression of Money Laundering Activities Law of (1996).
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                To ensure that this general policy is carried out, management of
                The Company has established and maintains an ongoing program for
                the purpose of assuring compliance with the relevant laws and
                regulations and the prevention of money laundering. This program
                seeks to coordinate the specific regulatory requirements
                throughout the group within a consolidated framework in order to
                effectively manage the group's risk of exposure to money
                laundering and terrorist financing across all business units,
                functions, and legal entities.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 7. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Each of the affiliates of The Company is required to comply with
                AML and KYC policies.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 8. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                All identification documentation and services records shall be
                kept for the minimum period of time required by local law.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 9. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                All new employees shall receive anti-money laundering training
                as part of the mandatory new-hire training program. All
                applicable employees are also required to complete AML and KYC
                training annually. Participation in additional targeted training
                programs is required for all employees with day to day AML and
                KYC responsibilities.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 10. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Company has the right to request from the Client to confirm
                his/her registration information indicated at the moment of
                opening the trading account at its discretion and at any time.
                In order to verify the data, the Company may request from the
                Client to provide notarized copies of: passport, driver's
                license or national identity card; bank account statements or
                utility bills in order to confirm the residence address. In some
                cases, the Company may ask the Client to provide a photograph of
                the Client holding the identity card close to his/her face.
                Detailed requirements for client identification are specified in
                the AML Policy section on the Company's official website.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 11. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The verification procedure is not mandatory for the Client's
                identification data if the Client has not received such a
                request from the Company. The Client may voluntarily send a copy
                of the passport or other document proving his/her identity to
                the Company's client support department to ensure verification
                of the said personal data. The Client must take into account
                that when depositing/withdrawing funds via bank transfer, he/she
                must provide documents for full verification of the name and
                address in connection with the specifics of the execution and
                processing of bank transactions.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 12. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                If any Client’s registration data (full name, address or phone
                number) have changed, the Client is obligated to immediately
                notify the Company’s client support department of these changes
                with a request to modify these data or make changes without
                assistance in the Client’s Profile.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 12.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                To change the phone number indicated at the registration of the
                Client’s Profile, the Client must provide a document confirming
                ownership of the new phone number (agreement with a mobile phone
                service provider) and a photo of the ID held close to the
                Client’s face. The Client’s personal data must be the same in
                both documents.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 13 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client is responsible for authenticity of the documents
                (their copies) and recognizes the right of the Company to
                contact the appropriate authorities of the country that has
                issued the documents to validate their authenticity.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default KYCPolicy;
