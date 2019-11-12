/*
	disqus.js
	Written on October 25, 29, 30, and November 3–8, 2019.
*/

"use strict";

window.disqus_config = function configure_disqus() {
	const page_information = JSON.parse(document.querySelector(`script[type="application/ld+json"]`).textContent);
	this.page.url = page_information.url;
	this.page.identifier = page_information.identifier;
};
const disqus_script = document.createElement("SCRIPT");
disqus_script.src = "https://ichan.disqus.com/embed.js";
disqus_script.setAttribute("data-timestamp", Date.now());
disqus_script.setAttribute("defer", "");
document.head.appendChild(disqus_script);
