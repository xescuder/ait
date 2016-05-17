'use strict';

var HomePage =  require('./pages/home-page.js');
var RestaurantPage =  require('./pages/restaurant-page.js');


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
			pageRestaurant = new RestaurantPage();

			pageHome.goToRestaurant('robatayaki');
			pageRestaurant.add2Cart();			
			priceSelected = pageRestaurant.dishPrice();						
		});

		xit('deberia el pedido tener el plato', function() {			
		});	      

		it('deberia el pedido tener un precio total igual al plato escogido', function() {						
			var expectedTotal = 'Total: $' + priceSelected;
		  	expect(pageRestaurant.cartTotal().getText()).toEqual(expectedTotal);
		});
    });
    
});