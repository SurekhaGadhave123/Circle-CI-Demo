const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  allure:true,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  watchForFileChanges:true,
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});




