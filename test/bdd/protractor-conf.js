'use strict';

var config = {

    seleniumAddress : 'http://localhost:4444/wd/hub',
    framework : 'cucumber',
    specs           : [ 'features/restaurant.feature' ],
    capabilities    : {
        browserName : 'chrome'
    },
    
    chromeDriver: '/usr/local/lib/node_modules/chromedriver'
    cucumberOpts : {
        // define your step definitions in this file
        require : 'features/steps/*_steps.js',
        format  : 'pretty'
    }

};

exports.config = config;