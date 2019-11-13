// GoogleAnalytics.mjs
// Written on August 17, 19, and November 11, 2019.

export default class GoogleAnalytics {
	static gtag(/* …… */) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push(arguments);
	} // -> undefined

	constructor(tracking_identifier/*: string */ = document.querySelector("#google-analytics").dataset.googleAnalyticsTrackingIdentifier) {
		this.tracking_identifier = tracking_identifier;
		GoogleAnalytics.gtag("js", new Date);
		GoogleAnalytics.gtag("config", this.tracking_identifier);
	} // -> GoogleAnalytics
	gtag(/* …… */) {
		GoogleAnalytics.gtag(...arguments);
	} // -> undefined
}
