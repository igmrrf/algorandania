import React from "react";
import Grid from "@material-ui/core/Grid";

class OverviewWidget extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12m",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      height: "450",
      width: "100%",
      plotLineColorGrowing: "rgba(33, 150, 243, 1)",
      plotLineColorFalling: "rgba(33, 150, 243, 1)",
      gridLineColor: "rgba(240, 243, 250, 1)",
      scaleFontColor: "rgba(120, 123, 134, 1)",
      belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
      belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
      symbolActiveColor: "rgba(33, 150, 243, 0.12)",
      tabs: [
        {
          title: "Commodities",
          symbols: [
            {
              s: "CME_MINI:ES1!",
              d: "E-Mini S&P",
            },
            {
              s: "CME:6E1!",
              d: "Euro",
            },
            {
              s: "COMEX:GC1!",
              d: "Gold",
            },
            {
              s: "NYMEX:CL1!",
              d: "Crude Oil",
            },
            {
              s: "NYMEX:NG1!",
              d: "Natural Gas",
            },
            {
              s: "CBOT:ZC1!",
              d: "Corn",
            },
          ],
          originalTitle: "Commodities",
        },
        {
          title: "Bonds",
          symbols: [
            {
              s: "CME:GE1!",
              d: "Eurodollar",
            },
            {
              s: "CBOT:ZB1!",
              d: "T-Bond",
            },
            {
              s: "CBOT:UB1!",
              d: "Ultra T-Bond",
            },
            {
              s: "EUREX:FGBL1!",
              d: "Euro Bund",
            },
            {
              s: "EUREX:FBTP1!",
              d: "Euro BTP",
            },
            {
              s: "EUREX:FGBM1!",
              d: "Euro BOBL",
            },
          ],
          originalTitle: "Bonds",
        },
        {
          title: "Forex",
          symbols: [
            {
              s: "FX:EURUSD",
            },
            {
              s: "FX:GBPUSD",
            },
            {
              s: "FX:USDJPY",
            },
            {
              s: "FX:USDCHF",
            },
            {
              s: "FX:AUDUSD",
            },
            {
              s: "FX:USDCAD",
            },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Cryptocurrencies",
          symbols: [
            {
              s: "BITSTAMP:BTCUSD",
            },
            {
              s: "COINBASE:ETHUSD",
            },
            {
              s: "COINBASE:ALGOUSD",
            },
            {
              s: "BINANCE:BNBBTC",
            },
            {
              s: "BITSTAMP:XRPUSD",
            },
            {
              s: "COINBASE:LTCUSD",
            },
          ],
        },
      ],
    });
    document.getElementById("id-overview-widget").appendChild(script);
  }

  render() {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <div id={"id-overview-widget"} className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Grid>
    );
  }
}
export default OverviewWidget;
