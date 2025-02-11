// cypress/support/cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://minhacorretora.uat.fairfax.com.br',
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
});