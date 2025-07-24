/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      dockerUp(): Chainable<void>;
      dockerDown(): Chainable<void>;
      getLocator(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('dockerUp', () => {
  cy.exec('docker-compose up -d', { timeout: 60000 })
    cy.wait(5000); 
});

Cypress.Commands.add('dockerDown', () => {
  cy.wait(5000); 
  cy.exec("docker-compose down", { failOnNonZeroExit: false });
});

Cypress.Commands.add('getLocator', (testId: string) => {
  cy.get(`[data-testid="${testId}"]`);
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false; // prevent Cypress from failing the test
});