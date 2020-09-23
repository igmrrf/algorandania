import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminGuard = ({ children, role }) => {
  if (role !== "admin") {
    return <Redirect to={"/login"} />;
  }

  return <>{children}</>;
};
const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, null)(AdminGuard);
