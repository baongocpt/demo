const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cwwvp5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/api/*.js'
  },
  reporter: 'cypress-junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
    toConsole: true,
    testCaseSwitchClassnameAndName: true,
  },
});
