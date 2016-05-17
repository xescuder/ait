 	// Pruebas unitarias de una calculadora
 	var calc = require('../calculator.js')

    describe('Calculadora', function() {

    	beforeEach(function() {
    	});

    	afterEach(function() {    		
  		});

  		describe('sumar', function() {
  			it('deberia sumar 3 y 7 y devolver 10', function() {
  				var result = calc.add(3,7);
  				expect(result).toBe(10);
  			});


  			it('deberia sumar -2 y 8 y devolver 6', function() {
  				var result = calc.add(-2,8);
  				expect(result).toBe(6);
  			});
  		});
    });