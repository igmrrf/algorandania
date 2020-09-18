import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthGuard = ({ children, role }) => {
  if (!role) {
    return <Redirect to={"/register"} />;
  }

  return <>{children}</>;
};
const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, null)(AuthGuard);
