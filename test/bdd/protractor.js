exports.config = {

  specs: [
    './features/**/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8081/',

  framework: 'cucumber',

};