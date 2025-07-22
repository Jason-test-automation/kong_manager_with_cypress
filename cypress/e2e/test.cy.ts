// import loginPage from './pages/test.page';
import '../support/commands';
import WorkspacesPage from './pages/workspace.page'
import GatewayServicePage from './pages/gateway-service-create.page'


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
    WorkspacesPage.visit().defauleWorkSpaceClick().addAGatewayServiceClick()
    GatewayServicePage.createNewGatewayServiceWithUrl('https://api.kong-air.com/test','random_name','random tag');

  });

});