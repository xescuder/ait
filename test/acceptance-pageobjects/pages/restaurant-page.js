'use strict';

var RestaurantPage = function() {
};


RestaurantPage.prototype = Object.create({	},{
	
	linkAddCart: {get: function(restaurante) {return element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[1]/a'));}},
	goToRestaurant: {value: function(restaurant) {this.linkRestaurant.click()}},
	dishPrice: {get: function() {return element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[2]/a/span[2]'));}},
	getPrice: {get:function() {
			dishPrice.getText().then(function(price)) {
				return price;
			}
	}}, 

	addToPedido: {value: function() {}}
});

module.exports = RestaurantPage;