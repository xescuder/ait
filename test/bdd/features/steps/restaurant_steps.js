'use strict';

var expect = require('chai').expect;
var support = require('../../lib');

var steps = function() {


  this.Given(/^Estoy en el restaurante "([^"]*)"$/, function (restaurant, callback) {

    // Write code here that turns the phrase above into concrete actions
    this.browser.get('http://localhost:3000/#/menu/robatayaki', function(result){
      setTimeout(callback, 10000);
    });
  });

  this.When(/^Selecciono el plato "([^"]*)"$/, function (plato, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^Deberia ver mi orden con el plato "([^"]*)"$/, function (plato, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};

module.exports = steps;