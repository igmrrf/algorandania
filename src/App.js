import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";
import routes, { renderRoutes } from "./routes";
import { createStyles, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getUserDetailsStartAsync } from "./redux/auth/auth.actions";
import { useSnackbar } from "notistack";

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

const App = ({ getUserDetailsStartAsync, errorMessage, role }) => {
  const { enqueueSnackbar } = useSnackbar;
  useEffect(() => {
    const id = localStorage.getItem("_id");
    if (id && !role) {
      getUserDetailsStartAsync(id);
    }
  }, [role, getUserDetailsStartAsync]);
  return (
    <ThemeProvider theme={theme}>
      {errorMessage
        ? enqueueSnackbar(errorMessage, { variant: "warning" })
        : null}
      <SnackbarProvider dense maxSnack={3}>
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
});

const mapStateToProps = (state) => ({
  role: state.auth.role,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
