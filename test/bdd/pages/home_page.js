var HomePage = (function () {
    function HomePage() {
        this.url = 'http://localhost:3000/index.html#/customer';
        this.customerNameInput = element(by.model('customerName'));
        this.customerAddressInput = element(by.model('customerAddress'));
        this.submitBtn = element(by.css('.btn-primary'));
    }

    HomePage.prototype.visit = function () {
        browser.get(this.url);
    };



    HomePage.prototype.login = function (name, address) {
        this.customerNameInput.sendKeys(name);
        this.customerAddressInput.sendKeys(address);
        this.submitBtn.click();
    };

    return HomePage;
})();


module.exports = HomePage;