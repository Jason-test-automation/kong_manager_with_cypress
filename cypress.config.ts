import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:8002/',
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: false,
  },
  video: true,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
});