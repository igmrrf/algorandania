import React from "react";
import { Typography } from "@material-ui/core";

const Layout = ({ children }) => (
  <div>
    <Typography variant={"h1"} component={"h1"}>
      Header
    </Typography>
    {children}
    <Typography variant={"h1"} component={"h1"}>
      Footer
    </Typography>
  </div>
);
export default Layout;
