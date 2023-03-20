const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/api/*.js'
  },
  reporter: 'reporters/custom.js',
  reporterOptions: {
    mochaFile: "results/test-results.xml",
    testCaseSwitchClassnameAndName: false
  }
});
