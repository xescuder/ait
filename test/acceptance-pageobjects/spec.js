'use strict';

var HomePage =  require('../pages/home-page.js');
var RestaurantPage =  require('../pages/restaurant-page.js');


var pageHome;
var pageRestaurant;



describe('Cuando añado platos a mi pedido', function() {
	var priceSelected;

    beforeEach(function() {
    	pageHome = new HomePage();
    	pageHome.doLogin('Xavier Escudero', 'Mi direccion');
    });


    describe('Cuando añado platos a mi pedido vacio', function() {
		beforeEach(function() {
			pageHome.goToRestaurant('robatayaki');
			pageRestaurant.linkAddCart();
			

	      	var linkAddCart = element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[1]/a'));
	      	element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[2]/a/span[2]')).getText().then(function(price) {
	      		console.log('Precio del plato:' + price);
	      		priceSelected = price;
	      		linkAddCart.click();
	      	});	      	
		});

		xit('deberia el pedido tener el plato', function() {			
		});	      

		it('deberia el pedido tener un precio total igual al plato escogido', function() {
			var total = element(by.binding('cart.total()'));
			var expectedTotal = 'Total: $' + priceSelected;
		  	expect(total.getText()).toEqual(expectedTotal);	
		});
    });-
});