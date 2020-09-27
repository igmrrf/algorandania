import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const GuestGuard = ({ children, role }) => {
  if (role === "user") {
    return <Redirect to={"/account/dashboard"} />;
  }
  if (role === "admin") {
    return <Redirect to={"/app/dashboard"} />;
  }
  return <>{children}</>;
};
const mapStateToProps = (state) => ({
  role: state.auth.role,
});

export default connect(mapStateToProps, null)(GuestGuard);
