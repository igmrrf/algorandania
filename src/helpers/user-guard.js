import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserGuard = ({ children, role }) => {
  if (role !== "user") {
    return <Redirect to={"/login"} />;
  }

  return <>{children}</>;
};
const mapStateToProps = (state) => ({
  role: state.auth.role,
});

export default connect(mapStateToProps, null)(UserGuard);
