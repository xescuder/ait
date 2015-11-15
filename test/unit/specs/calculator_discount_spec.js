 var calc = require('../calculator_discount.js')

 describe('Calculo descuento compra', function() {
  
  describe('calcular descuento por vale', function() {
    it('deberia devolver un descuento del 5% si el vale es activo', function() {
      expect(calc.getDiscountByVale(true)).toEqual(0.5);
    });

    it('deberia devolver un mensaje de error si el vale es inactivo', function() {
      expect(function() {
        calc.getDiscountByVale(false);
      }).toThrow(new Error('El vale ha caducado'));
    });
  });

  describe('calcular descuento por precio de compra', function() {
    it('deberia devolver un descuento del 5% si el precio supera los 50 euros', function() {
      expect(calc.getDiscountByPrice(51)).toBe(0.05);
    });

    it('deberia devolver un descuento del 10% si el precio supera los 100 euros', function() {
      expect(calc.getDiscountByPrice(200)).toBe(0.1);
    });
  });
});