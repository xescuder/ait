'use strict';

var expect = require('chai').expect;
var HomePage = require('../pages/home-page.js');

/*var steps = function() {
  var page = new HomePage();

  this.Given('estoy en el login', function(done) {    
    page.visit().then(function () {
      done();
    });
  });


  this.When('introduzco mis datos', function (done) {      
      page.login('Xavier','Mi direccion').then(function () {
        done();
      });
  });

  this.Then('debería ver el titulo de la aplicacion', function() {
      expect(browser.getTitle()).toEqual('Foodme');
  });


};

module.exports = steps;
*/

var steps = function() {

  this.Given(/^Veo el listado de restaurantes$/, function(done) {
    // callback.pending();
    browser.get('http://localhost:3000/index.html#/customer');
    // fill in the customer, so that we navigate to restaurants list
    element(by.model('customerName')).sendKeys('Xavier');
    element(by.model('customerAddress')).sendKeys('Mi direccion');
    element(by.css('.btn-primary')).click();
  });


  this.When('Selecciono un restaurante', function (done) {
      browser.get('http://localhost:3000/#/menu/robatayaki');
      //callback.pending();
  });

  this.Then('Deberia ver un titulo', function(callback) {
      callback.pending();
  });


};

module.exports = steps;