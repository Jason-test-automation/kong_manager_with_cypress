// ///// <reference types="cypress" /> 
// import 'cypress';
// // make this file a model,safe,in TS. if not, declare global will not work
// // export nothing,only use it to mark this file a model
// export {};

// //Explicit declaration
// declare global { 
//   namespace Cypress {
//     interface Chainable<Subject = any> {
//     // Every Cypress command returns a Chainable object that allows you to chain more commands.
//       dockerUp(): Cypress.Chainable<void>;
//       dockerDown():Cypress.Chainable<void>;
//       locator(testId: string): Cypress.Chainable<JQuery<HTMLElement>>;
//     }
//   }
// }

// Cypress.Commands.add('dockerUp', () => {
//     return cy.exec("docker-compose up -d", { timeout: 180000 })
//       .then(() => {
//         cy.wait(5000)
//     });
// });

// Cypress.Commands.add('dockerDown', () => {
//     return cy.exec("docker-compose down", { 
//         failOnNonZeroExit: false,
//         timeout:6000
//      }).then((res) => {
//         if(res.code !== 0){
//             cy.log('docker down failed.',res.stderr);
//         }
//         else{
//             cy.log('docker down successfully.');
//         }
//     });
// });

// Cypress.Commands.add('locator', (testId: string) => {
//   return cy.get(`[data-testid="${testId}"]`);
// });

/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      dockerUp(): Chainable<void>;
      dockerDown(): Chainable<void>;
      locator(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('dockerUp', () => {
  cy.exec('docker-compose up -d', { timeout: 180000 })
    .then((result) => {
      if (result.code !== 0) {
        throw new Error(`docker-compose up failed: ${result.stderr}`);
      }
      cy.wait(5000); 
    });
});

Cypress.Commands.add('dockerDown', () => {
  cy.exec('docker-compose down', {
    failOnNonZeroExit: false,
    timeout: 60000
  }).then((result) => {
    if (result.code !== 0) {
        cy.log('docker down failed.',result.stderr);
    }
  });
});

Cypress.Commands.add('locator', (testId: string) => {
  cy.get(`[data-testid="${testId}"]`);
});