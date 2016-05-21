(function() {
  var World;

  module.exports.World = World = function(callback) {
    var calc = require('../../models/calculator.js');
    
    this.add = function(arg1, arg2) {
      return calc.add(arg1, arg2);
    };
    
  };

}).call(this);
