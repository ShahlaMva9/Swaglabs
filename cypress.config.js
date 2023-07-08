const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    redirectionLimit: 20,
    failOnStatusCode: false,
    env: {
      standard_user: {
        username: "standard_user",
        password: "secret_sauce",
      },
      locked_out_user: {
        username: "locked_out_user",
        password: "secret_sauce",
      },
      problem_user: {
        username: "problem_user",
        password: "secret_sauce",
      },
      performance_glitch_user: {
        username: "performance_glitch_user",
        password: "secret_sauce",
      },
    },
  },
});
