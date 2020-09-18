import React from "react";
import LandingNavBar from "./top-bar";
import LandingFooter from "./footer";

const Layout = ({ children }) => (
  <div>
    <LandingNavBar />
    {children}
    <LandingFooter />
  </div>
);
export default Layout;
