/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      dockerUp(): Chainable<void>;
      verifyDockerIsUP(): Chainable<void>;
      dockerDown(): Chainable<void>;
      getLocator(testId: string): Chainable<JQuery<HTMLElement>>;
      waitForText(
        text: string,
        timeout?: number
      ): Chainable<JQuery<HTMLBodyElement>>;
    }
  }
}

Cypress.Commands.add('dockerUp', () => {
  cy.exec('docker-compose up -d', { timeout: 180000 }).then(() => {
    cy.wait(5000);
  });
});

Cypress.Commands.add('verifyDockerIsUP', () => {
  cy.request({
    method: 'GET',
    url: 'http://localhost:8001/status',
    retryOnStatusCodeFailure: true,
    retryOnNetworkFailure: true,
    timeout: 30000,
  })
    .its('status')
    .should('eq', 200);
});

Cypress.Commands.add('dockerDown', () => {
  cy.wait(5000);
  cy.exec('docker-compose down', { failOnNonZeroExit: false });
});

Cypress.Commands.add('getLocator', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('waitForText', (text: string, timeout?: number) => {
  return cy.get('body').should('contain', text, { timeout });
});

Cypress.on('uncaught:exception', (err) => {
  console.error('Uncaught exception:', err);
  return false; // prevent Cypress from failing the test
});
