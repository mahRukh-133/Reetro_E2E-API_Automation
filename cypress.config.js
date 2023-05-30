const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rm716e",
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


      // implement node event listeners here
    },
    "experimentalStudio": true,

    //run all spec config
    "experimentalRunAllSpecs": true, 
  },
});
