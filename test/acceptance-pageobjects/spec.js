'use strict';

var HomePage =  require('./pages/home-page.js');
var RestaurantPage =  require('./pages/restaurant-page.js');


var pageHome;
var pageRestaurant;
var priceSelected;


describe('Cuando añado platos a mi pedido', function() {
	

    beforeEach(function() {
    	pageHome = new HomePage();
    	pageHome.doLogin('Xavier Escudero', 'Mi direccion');
    });


    describe('Cuando añado platos a mi pedido vacio', function() {
		beforeEach(function() {
			pageRestaurant = new RestaurantPage();

			pageHome.goToRestaurant('robatayaki');
	      	element(by.xpath('html/body/div/ng-view/div[2]/div[1]/ul/li[2]/a/span[2]')).getText().then(function(price) {
	      		priceSelected = price;
				pageRestaurant.add2Cart();			
	      	});	     

			
		});

		xit('deberia el pedido tener el plato', function() {			
		});	      

		it('deberia el pedido tener un precio total igual al plato escogido', function() {						
			var expectedTotal = 'Total: $' + priceSelected;
		  	expect(pageRestaurant.cartTotal).toEqual(expectedTotal);
		});
    });
    
});