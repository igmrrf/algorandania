import React from "react";

class index extends React.Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
		script.async = true;
		script.innerHTML = JSON.stringify({
			symbols: [
				{
					proName: "OANDA:SPX500USD",
					title: "S&P 500",
				},
				{
					proName: "OANDA:NAS100USD",
					title: "Nasdaq 100",
				},
				{
					proName: "FX_IDC:EURUSD",
					title: "EUR/USD",
				},
				{
					proName: "BITSTAMP:BTCUSD",
					title: "BTC/USD",
				},
				{
					proName: "BITSTAMP:ETHUSD",
					title: "ETH/USD",
				},
			],
			colorTheme: "light",
			isTransparent: false,
			displayMode: "adaptive",
			locale: "en",
		});
		document.getElementById("slide-me-up").appendChild(script);
	}

	render() {
		return (
			<div id="slide-me-up" className="tradingview-widget-container">
				<div className="tradingview-widget-container__widget"></div>
			</div>
		);
	}
}
export default index;
