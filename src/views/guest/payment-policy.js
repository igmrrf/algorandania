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

const PaymentPolicy = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid>
        <Typography variant={"h2"} component={"p"} className={classes.heading}>
          Payment Policy
        </Typography>
      </Grid>
      <Box className={classes.list}>
        <List>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The company is financially responsible for the clients account
                balance in any particular moment.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.2 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Company's financial responsibility starts with the first record
                about the customer's deposit and continues up to a full
                withdrawal of funds.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.3 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The client has the right to demand from the Company any amount
                of funds which is available in his/her account at the time of
                the enquiry.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.4 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The only official methods of deposits/withdrawals are the
                methods which appear on the company's official website. The
                client assumes all the risks related to the usage of these
                payment methods since the payment methods are not the company's
                partners and not the company's responsibility. The company is
                not responsible for any delay or cancelation of a transaction
                which was caused by the payment method. In case the client has
                any claims related to any of the payment methods, it is his/her
                responsibility to contact the support service of the particular
                payment method and to notify the company about those claims.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.5 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The company does not assume any responsibility for the activity
                of any third party service providers which the customer may use
                in order to make a deposit/withdrawal. The company's financial
                responsibility for the client's funds starts when the funds have
                been loaded to the company's bank account or any other account
                related to the payment methods which appear on the company's
                website. In case any fraud is detected during or after a
                financial transaction, the company reserves the right to cancel
                such transaction and freeze the client's account. The Company's
                responsibility for the clients' funds ends when the funds are
                withdrawn from the company's bank account or any other account
                related to the company.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.6 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                In case of any technical mistakes related to financial
                transactions, the company reserves the right to cancel such
                transactions and their results.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 1.7 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The client may have only one registered account on the company's
                website. In case the company detects any duplication of the
                customer's accounts, the company reserves the right to freeze
                the customer's accounts and funds without the right of
                withdrawal.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 2. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Client's registration
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}>2.1</ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Client's registration is based on two main steps:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>- Client's web registration.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>- Client's identity verification.</ListItemText>
                </ListItem>
              </List>
              <Typography variant={"body1"} component={"p"}>
                In order to complete the first step the client needs to:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    - Provide the company with his/her real identity and contact
                    details.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    - To accept the company's agreements and their appendices.
                  </ListItemText>
                </ListItem>
              </List>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 2.2</ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                In order to complete the second step the company needs to
                request and the client needs to provide
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    - a scan or digital photo of his/her identification
                    document.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    - full copy of all the pages of his/her ID documet with the
                    photo and personal details.
                  </ListItemText>
                </ListItem>
              </List>

              <Typography variant={"body1"} component={"p"}>
                The company reserves the right to demand from the client any
                other documents, such as payment bills, bank confirmation, bank
                card scans or any other document that may be necessary during
                the identification process.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 2.3 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The identification process must be completed in 10 business days
                since the company`s request. In some cases the company may
                increase the identification period up to 30 working days.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 3.</ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Deposit process
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}>3.1</ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                In order to make a deposit, the client shall to make an enquiry
                from his Personal Cabinet. In order to complete the enquiry, the
                client needs to choose any of the payment methods from the list,
                fill in all the necessary details and continue with the payment.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    The following currencies are available for deposit: USD
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Withdrawal request processing time depends on the payment
                    method and may vary from one method to another. The company
                    cannot regulate the processing time. In case of using
                    electronic payment methods, the transaction time can vary
                    from seconds to days. In case of using direct bank wire, the
                    transaction time can be акщь 3 up to 45 business days.
                  </ListItemText>
                </ListItem>
              </List>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 4. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Taxes
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The company is not a tax agent and does not provide the clients'
                financial information to any third parties. This information can
                only be provided in case of an official demand from government
                agencies.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Refund policy
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                At any time a Client can withdraw a part or all funds from
                his/her Account by sending the Company a Request for Withdrawal
                containing the Client’s order to withdraw money from the
                Client’s Account, which complies with the following terms:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    - the Company will execute the order for withdrawal from the
                    Client’s trading account, which will be limited by the
                    remaining balance of the Client’s Account at the time of
                    order execution. If the amount withdrawn by the Client
                    (including commissions and other expenses as per this
                    Regulation) exceeds the balance of the Client's Account, the
                    Company may reject the order after explaining the reason for
                    the rejection.;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    - the Client's order to withdraw money from the Client's
                    Account must comply with the requirements and restrictions
                    set forth by current legislation and other provisions of the
                    countries in the jurisdiction of which such transaction is
                    made;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    - money from the Client's Account must be withdrawn to the
                    same payment system with the same purse ID that was
                    previously used by the Client to deposit funds to the
                    Account. The Company may limit the amount of the withdrawal
                    to a payment system with amount of the deposits came on the
                    Client's account from that payment system. The Company may,
                    at its discretion, make exceptions to this rule and withdraw
                    Client money to other payment systems, but the Company may
                    at any time ask the Client for the payment information for
                    the other payment systems, and the Client must provide the
                    Company with that payment information.;
                  </ListItemText>
                </ListItem>
              </List>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.2 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                A Request for Withdrawal is executed by transferring the funds
                to the Client’s External Account by an Agent authorized by the
                Company.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.3 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client shall make a Request for Withdrawal in the currency
                of the deposit. If the deposit currency is different from the
                transfer currency, the Company will convert transfer amount into
                the transfer currency at the exchange rate established by the
                Company as of the time when the funds are debited from the
                Client’s Account.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.4 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The currency in which the Company makes transfers to the
                Client’s External Account may be displayed in the Client’s
                Dashboard, depending on the currency of the Client’s Account and
                the withdrawal method.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.5 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The conversion rate, commission and other expenses related to
                each withdrawal method are set by the Company and may be changed
                at any time at the Company’s sole discretion. The exchange rate
                may differ from the currency exchange rate set by the
                authorities of a particular country and from the current market
                exchange rate for the relevant currencies. In the cases
                established by Payment Service Providers, funds may be withdrawn
                from the Client’s Account in a currency that is different from
                the currency of the Client’s External Account.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.6 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Company reserves the right to set minimum and maximum
                withdrawal amounts depending on the withdrawal method. These
                restrictions will be set out in the Client's Dashboard.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.7 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The withdrawal order is deemed accepted by the Company if it is
                created in the Client’s Dashboard, and is displayed in the
                Balance History section and in the Company’s system for
                accounting clients’ requests. An order created in any manner
                other than that specified in this clause will not be accepted
                and executed by the Company.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.8 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The funds will be withdrawn from the Client's account within
                five (5) business days.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.9 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                If the funds sent by the Company pursuant to a Request for
                Withdrawal have not arrived in the Client's External Account
                after five (5) business days, the Client may ask the Company to
                investigate this transfer.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.10 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                If the Client has made an error in the payment information when
                drawing up a Request for Withdrawal that resulted in a failure
                to transfer money to the Client's External Account, the Client
                will pay a commission for resolving the situation.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 5.11 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client's profit in excess of the funds deposited by the
                Client may be transferred to the Client's External Account only
                by a method agreed by the Company and Client, and if the Client
                made a deposit to his/her account by a certain method, the
                Company has the right to withdraw a previous deposit of the
                Client by the same method.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6. </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Payment methods for withdrawals
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                6.1 Bank transfer.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.1.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client may send a Request for Withdrawal by bank wire
                transfer at any time if the Company accepts this method at the
                time of funds transfer.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.1.2 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client may make a Request for Withdrawal only to a bank
                account opened in his/her name. The Company will not accept and
                execute orders to transfer money to a bank account of a third
                party.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.1.3 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Company must send the money to the Client's bank account in
                accordance with the information in the Request for Withdrawal if
                the conditions of clause 7.1.2. of this Regulation are met.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client understands and agrees that the Company assumes no
                liability for the time a bank transfer takes.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.2 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                Electronic transfer.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.2.1 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                6.2.1 The Client may send a Request for Withdrawal by electronic
                transfer at any time if the Company uses this method when the
                transfer is made.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.2.2 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client may make a Request for Withdrawal only to his/her
                personal electronic payment system wallet.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.2.3</ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Company must send money to the Client's electronic account
                in accordance with the information in the Request for
                Withdrawal.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.2.4 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Client understands and acknowledges that the Company is not
                responsible for the time an electronic transfer takes or for the
                circumstances resulting in a technical failure during the
                transfer if they occurred through no fault of the Company.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ color: "white" }}> 6.3 </ListItemIcon>
            <ListItemText>
              <Typography variant={"body1"} component={"p"}>
                The Company may, at its discretion, offer the Client other
                methods for withdrawing money from the Client's account. This
                information is posted in the Dashboard.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default PaymentPolicy;
