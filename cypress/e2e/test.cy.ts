// import loginPage from './pages/test.page';
import '../support/commands';
import {GatewayServicePage,KoneMangerHomePage} from './pages/test.page'
const gatewayServicePage = new GatewayServicePage();
const koneMangerHomePage = new KoneMangerHomePage();

describe('Kong Manager Tests', () => {
  before(() => {
    cy.dockerUp();
  });

  after(() => {
    cy.dockerDown()
  });

  it('create new gateway service', () => {
    // cy.visit('http://localhost:8002/default/services/create')
    // cy.locator(ServicesCreatePageElements.fullUrlInput).type('testufl');
    //create the service
    gatewayServicePage.visit().inputAndSave();

  });

});