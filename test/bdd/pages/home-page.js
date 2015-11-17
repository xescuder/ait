'use strict';

var HomePage = function() {
  browser.driver.manage().deleteAllCookies();	
  browser.get('http://localhost:3000/index.html#/customer');
};


HomePage.prototype = Object.create({},{
	customerName: { get: function () { return element(by.model('customerName')); }},
	customerAddress: { get: function () { return element(by.model('customerAddress')); }},
	loginBtn: { get: function () { return element(by.css('.btn-primary')); }},
	doLogin: {value: function(name, address) {
		this.customerName.sendKeys(name);
		this.customerAddress.sendKeys(address);
		this.loginBtn.click();
	}},

	linkRestaurant: {get: function(restaurante) {return element(by.css('a[href*="#/menu/' + restaurante + '"]'))}},
	goToRestaurant: {value: function(restaurant) {this.linkRestaurant.click()}}
});

module.exports = HomePage;