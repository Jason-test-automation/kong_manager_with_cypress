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
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    testsuitesTitle: 'Kong Manager Cypress Tests',
    mochaFile: 'reports/junit/results-[hash].xml'
  },
});
