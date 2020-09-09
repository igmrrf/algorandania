import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = () =>
  makeStyles((theme) => ({
    root: {
      minHeight: "420px",
      border: "2px solid red",
    },
  }));
let loading;
class Crypto extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    loading = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.type = "text/javascript";
    script.id = "script-made-id";
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "490",
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
    });

    document.getElementById("id-crypto-widget").appendChild(script);
  }

  render() {
    const classes = useStyle();
    return (
      <Grid item xs={12}>
        <div
          id={"id-crypto-widget"}
          className="tradingview-widget-container"
          className={classes.root}
        >
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Grid>
    );
  }
}
export default Crypto;
