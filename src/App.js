import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/Shared-containers/not-found";
import {
  Transactions,
  Banks,
  Users,
  Dashboard,
} from "./containers/admin-containers";
import {
  UserDashboard,
  UserContact,
  UserDeposit,
  UserPlans,
  UserSettings,
  UserTransactionHistory,
  UserWithdraw,
} from "./containers/user-containers";

import {
  AboutUs,
  ContactUs,
  Faqs,
  Home,
  PrivacyPolicy,
  RiskDisclosure,
  SignIn,
  SignUp,
  SocialTrading,
  TermsOfUse,
  Plans,
} from "./containers/landing-containers";
import UserNavBar from "./components/user-components/nav-bar";
import LandingNavBar from "./components/landing-components/nav-bar";
import AdminFooter from "./components/admin-components/footer";
import UserFooter from "./components/user-components/footer";

class App extends React.Component {
  render() {
    const user = false;
    const admin = false;
    return (
      <div className="App">
        {user ? (
          <React.Fragment>
            <UserNavBar />
            <Switch>
              <Route exact path={"/"} component={UserDashboard} />
              <Route exact path={"/contact"} component={UserContact} />
              <Route exact path={"/deposit"} component={UserDeposit} />
              <Route exact path={"/plans"} component={UserPlans} />
              <Route exact path={"/settings"} component={UserSettings} />
              <Route
                exact
                path={"/transaction-history"}
                component={UserTransactionHistory}
              />
              <Route exact path={"/withdraw"} component={UserWithdraw} />
              <Route exact path={"/current-values"} component={UserDashboard} />
              <Route exact path={"*"} component={NotFound} />
            </Switch>
            <UserFooter />
          </React.Fragment>
        ) : admin ? (
          <React.Fragment>
            <Switch>
              <Route exact path={"/"} component={Dashboard} />
              <Route exact path={"/users"} component={Users} />
              <Route exact path={"/transactions"} component={Transactions} />
              <Route exact path={"/banks"} component={Banks} />
              <Route exact path={"*"} component={NotFound} />
            </Switch>
            <AdminFooter />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LandingNavBar />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/contact-us"} component={ContactUs} />
              <Route exact path={"/faqs"} component={Faqs} />
              <Route exact path={"/sign-in"} component={SignIn} />
              <Route exact path={"/sign-up"} component={SignUp} />
              <Route exact path={"/privacy-policy"} component={PrivacyPolicy} />
              <Route exact path={"/social-trading"} component={SocialTrading} />
              <Route
                exact
                path={"/risk-disclosure"}
                component={RiskDisclosure}
              />
              <Route exact path={"/terms-of-use"} component={TermsOfUse} />
              <Route exact path={"/forgot-password"} component={TermsOfUse} />
              <Route exact path={"*"} component={NotFound} />
            </Switch>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
