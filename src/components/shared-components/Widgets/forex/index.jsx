import React from "react";
import Grid from "@material-ui/core/Grid";

class ForexWidget extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      interval: "1m",
      width: "100%",
      isTransparent: false,
      height: 450,
      symbol: "BITSTAMP:BTCUSD",
      showIntervalTabs: true,
      locale: "en",
      colorTheme: "light",
    });
    document.getElementById("make-it-rain").appendChild(script);
  }

  render() {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <div id={"make-it-rain"} className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Grid>
    );
  }
}

export default ForexWidget;
