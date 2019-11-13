// controlled_element_injection.js
// Written on November 13, 2019.

"use strict";

function process_and_check_an_injecting_node(node) {
	if(node instanceof HTMLScriptElement) {
		node.removeAttribute("charset");
	}
	if((node instanceof HTMLScriptElement && node.type === "text/javascript")
	|| (node instanceof HTMLStyleElement && node.type === "text/css")) {
		node.removeAttribute("type");
	}
	if(String(node.id).startsWith("taboola")) {
		console.debug("Taboola ads have been blocked. Sorry, I prefer more decent ads for my visitors.");
		return false;
	}
	if(String(node.src).toLowerCase().includes("moatads.com")) {
		console.debug(`A script “${node.src}” has been blocked.\nWell, I don’t want that to be here.`);
		return false;
	}
	return true;
}

const appendChild = Element.prototype.appendChild;
Element.prototype.appendChild = function controlled_appendChild() {
	const appending_node = arguments[0];
	if(process_and_check_an_injecting_node(appending_node)) {
		return appendChild.apply(this, arguments);
	} else {
		return appending_node;
	}
};

const insertBefore = Element.prototype.insertBefore;
Element.prototype.insertBefore = function controlled_insertBefore() {
	const inserting_node = arguments[0];
	if(process_and_check_an_injecting_node(inserting_node)) {
		return insertBefore.apply(this, arguments);
	} else {
		return inserting_node;
	}
}
