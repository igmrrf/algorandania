import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import routes, { renderRoutes } from "./routes";
import { createStyles, makeStyles } from "@material-ui/core";

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider dense maxSnack={3}>
        <Router>
          <GlobalStyles />
          {renderRoutes(routes)}
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
