const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cwwvp5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
