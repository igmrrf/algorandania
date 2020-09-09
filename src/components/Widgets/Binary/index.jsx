import React from "react";
import Card from "@material-ui/core/Card";

class index extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BITSTAMP:BTCUSD",
      locale: "en",
      dateRange: "12m",
      colorTheme: "light",
      trendLineColor: "#37a6ef",
      underLineColor: "#e3f2fd",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
    });
    document.getElementById("crypto").appendChild(script);
  }

  render() {
    return (
      <Card id="crypto" className="account-cards">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Card>
    );
  }
}
export default index;
