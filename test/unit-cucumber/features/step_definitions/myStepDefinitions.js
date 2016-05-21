(function() {
  module.exports = function() {
    var result;

    this.World = require('../support/world').World;
    this.Given(/^la calculadora está inicializada$/, function(callback) {
      //this.clearCalculator();
      callback();
    });

    
    this.When(/^Yo sumo (\d+) y (\d+)$/, function(arg1, arg2, callback) {      
      result = this.add(arg1, arg2);
      //callback(null, 'pending');
      callback();
    });

    this.Then(/^el resultado debería ser (\d+)$/, function(arg1, callback) {
      console.log('Result:' + result);
      if (result === Number(arg1)) {
        callback();
      } else {
        callback(new Error('La suma se esperaba que fuera ' + arg1 + ' y es:' + result));
      }
    });
  };

}).call(this);