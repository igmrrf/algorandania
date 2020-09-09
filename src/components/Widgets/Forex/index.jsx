// import React from "react";
// import Grid from "@material-ui/core/Grid";
//
// class index extends React.Component {
//   componentDidMount() {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       width: "100%",
//       height: "100%",
//       currencies: [
//         "EUR",
//         "USD",
//         "JPY",
//         "GBP",
//         "CHF",
//         "AUD",
//         "CAD",
//         "NZD",
//         "CNY",
//       ],
//       isTransparent: false,
//       colorTheme: "dark",
//       locale: "en",
//     });
//     document.getElementById("forex-trade").appendChild(script);
//   }
//
//   render() {
//     return (
//       <Grid item xs={10} className="my-4">
//         <div id="forex-trade" className="tradingview-widget-container">
//           <div className="tradingview-widget-container__widget"></div>
//         </div>
//       </Grid>
//     );
//   }
// }
// export default index;

import React from "react";
class Forex extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      interval: "1m",
      width: 425,
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
      <div id={"make-it-rain"} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}

export default Forex;
