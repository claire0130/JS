(function(global) {
	'use strict';

	function query(selector) {
		return document.querySelector(selector);
	}

	function createEle(element_name, text) {
		var create_node = document.createElement(element_name);
		if ( typeof text === 'string' ) {
			var text_node = document.createTextNode(text);
			create_node.appendChild(text_node);
		}
		return create_node;
	}

	module.exports = { 
		query : query,
		createEle : createEle
	};
})(this);