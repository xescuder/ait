describe('Recibir bienvenida en el acceso', function() {
  it('deberia aparecer el titulo', function() {
    browser.get('http://localhost:3000/#/');

    expect(browser.getTitle()).toEqual('Comeme');
  });
});

describe('Cuando añado platos a mi pedido', function() {
	var priceSelected;

    beforeEach(function() {
      browser.driver.manage().deleteAllCookies();	
	  browser.get('http://localhost:3000/index.html#/customer');
      element(by.model('customerName')).sendKeys('Xavier');
      element(by.model('customerAddress')).sendKeys('Mi direccion');
      element(by.css('.btn-primary')).click();
      element(by.css('a[href*="#/menu/robatayaki"]')).click();    		      
    });

    afterEach(function() {
    	browser.manage().logs().get('browser').then(function(browserLog) {
      		expect(browserLog.length).toEqual(0);      		
      		console.log('log: ' + require('util').inspect(browserLog));
    	});
  	});

    describe('Cuando añado un plato a mi pedido vacio', function() {
		beforeEach(function() {
			var h3Tag = element(by.tagName('h3'));

	      	expect(h3Tag.getText()).toBe('Robatayaki Hachi');
	      	
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