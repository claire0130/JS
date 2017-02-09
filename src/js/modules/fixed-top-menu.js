(function(global) {
	'use strict';

	var domHepler = require('dom-hepler');

	document.addEventListener("DOMContentLoaded", fixedTopMenu);

	function fixedTopMenu() {
		var currentScrollY = 0;
		var goodsTabList = domHepler.query('.goods-tab-list');
		var ScrollYHeight = 200;

		function scrollController() {
			currentScrollY = window.scrollY;
			currentScrollY > ScrollYHeight ?
				goodsTabList.classList.add('goods-tab-list-fixed') : 
				goodsTabList.classList.remove('goods-tab-list-fixed');
		}
		window.addEventListener('scroll', scrollController);
	}
})(this);