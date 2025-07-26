// import loginPage from './pages/test.page';
import '../support/commands';
import WorkspacesPage from '../pages/workspace.page';
import ServiceCreatePage from '../pages/serviceCreate.page';
import GatewayServicePage from '../pages/gatewayServicesPage/gatewayServices.page'
import GatewayServiceDetailPage from '../pages/gatewayServicesPage/gatewayServiceDetail.page';

describe('Kong Manager Tests', () => {
  before(() => {
    cy.dockerUp();
    // WorkspacesPage.deleteService();
  });

  after(() => {
    // cy.dockerDown();
  });

  it('create new gateway service', () => {
    WorkspacesPage.visit();
    GatewayServicePage.visit().addAGatewayService();
    // TODO: use random params
    const url = 'https://api.kong-air.com/test';
    const serviceName = 'service_name1';
    const serviceTagName = 'service tag1';
    ServiceCreatePage.createNewGatewayServiceWithUrl(
      url,
      serviceName,
      serviceTagName
    );
    //then it will goto service detail page
    GatewayServiceDetailPage.getServiceName().then((name) => {
      cy.log(`Service Name: ${name}`);
      expect(name).to.equal(serviceName);
    });
  });
});
