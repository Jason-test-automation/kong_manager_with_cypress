// import loginPage from './pages/test.page';
import '../support/commands';
import WorkspacesPage from './pages/workspace.page';
import GatewayServicePage from './pages/serviceCreate.page';

describe('Kong Manager Tests', () => {
  before(() => {
    cy.dockerUp();
  });

  after(() => {
    cy.dockerDown();
  });

  it('create new gateway service', () => {
    // cy.visit('http://localhost:8002/default/services/create')
    // cy.locator(ServicesCreatePageElements.fullUrlInput).type('testufl');
    //create the service
    WorkspacesPage.visit().clickDefauleWorkSpace().clickAddAGatewayService();
    const url = 'https://api.kong-air.com/test';
    const serviceName = 'random_name';
    const serviceTagName = 'random tag';
    GatewayServicePage.createNewGatewayServiceWithUrl(
      url,
      serviceName,
      serviceTagName
    );
  });
});
