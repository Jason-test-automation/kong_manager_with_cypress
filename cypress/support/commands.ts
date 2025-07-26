/// <reference types="cypress" />

export { };

declare global {
  namespace Cypress {
    interface Chainable {
      dockerUp(): Chainable<void>;
      dockerDown(): Chainable<void>;
      getLocator(testId: string): Chainable<JQuery<HTMLElement>>;
      waitForText(text: string, timeout?: number): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('dockerUp', () => {
  cy.exec('docker-compose up -d', { timeout: 180000 }).then(() => {
    cy.wait(5000);
  });
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
