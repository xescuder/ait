(function() {
  var Calc;

  Calc = (function() {
    Calc.prototype._arg1 = 0;

    Calc.prototype._arg2 = 0;

    function Calc() {
      return;
    }

    Calc.prototype.clearCalculator = function() {};

    Calc.prototype.setArguments = function(arg1, arg2) {
      this._arg1 = Number(arg1);
      this._arg2 = Number(arg2);
    };

    Calc.prototype.add = function() {
      return this._arg1 + this._arg2;
    };

    return Calc;

  })();

  module.exports = Calc;

}).call(this);
