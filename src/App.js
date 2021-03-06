import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";
import routes, { renderRoutes } from "./routes";
import { createStyles, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getUserDetailsStartAsync,
  clearAuthMessages,
} from "./redux/auth/auth.actions";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

const App = ({
  getUserDetailsStartAsync,
  clearAuthMessages,
  errorMessage,
  role,
  id,
}) => {
  useEffect(() => {
    console.log("Mounted");
    if (id && role) {
      getUserDetailsStartAsync(id);
    }
  }, [role, getUserDetailsStartAsync, id]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        dense
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Router>
          <GlobalStyles />
          {renderRoutes(routes)}
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUserDetailsStartAsync: (id) => dispatch(getUserDetailsStartAsync(id)),
  clearAuthMessages: () => dispatch(clearAuthMessages()),
});

const mapStateToProps = (state) => ({
  role: state.auth.role,
  id: state.auth.id,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
