(function(global) {
	'use strict';

	// require
	var domHepler = require('./modules/dom-hepler');
	var goods = require('./modules/goods');

	// Fixed Top Menu
	var currentScrollY = 0;
	var goodsTabList = document.querySelector('.goods-tab-list');

	function scrollController() {
		currentScrollY = window.scrollY;
		if ( currentScrollY > 200 ) {
			goodsTabList.classList.add('goods-tab-list-fixed');
		} else {
			goodsTabList.classList.remove('goods-tab-list-fixed');
		}
	}

	window.addEventListener('scroll', scrollController);

})(this);