'use strict';

var RestaurantPage = function() {
};


RestaurantPage.prototype = Object.create({	},{
	
	linkAdd2Cart: {get: function() {return element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[1]/a'));}},      	
	add2Cart: {value: function() {this.linkAdd2Cart.click()}},
	dishPrice: {get: function() {return	element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[2]/a/span[2]'));}},
	cartTotal: {get: function() {return element(by.binding('cart.total()')).getText();}}
});

module.exports = RestaurantPage;