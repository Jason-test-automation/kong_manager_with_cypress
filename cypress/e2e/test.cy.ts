// import loginPage from './pages/test.page';
import '../support/commands';
import {ServicesCreatePageElements,GatewayServicePage} from './pages/test.page'
const gatewayServicePage = new GatewayServicePage();

describe('Login Tests', () => {
  before(() => {
    cy.dockerUp();
  });

  after(() => {
    cy.dockerDown()
  });

  it('create new gateway service', () => {
    // cy.visit('http://localhost:8002/default/services/create')
    gatewayServicePage.visit();
    gatewayServicePage.inputAndSave();
    // cy.locator(ServicesCreatePageElements.fullUrlInput).type('testufl');
  });

});