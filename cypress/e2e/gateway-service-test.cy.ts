// import loginPage from './pages/test.page';
import '../support/commands';
import WorkspacesPage from '../pages/workspace.page';
import ServiceCreatePage from '../pages/gateway-services-page/gateway-service-create.page';
import GatewayServicePage from '../pages/gateway-services-page/gateway-services.page';
import GatewayServiceDetailPage from '../pages/gateway-services-page/gateway-service-detail.page';
import RoutesCreatePage, {
  routesMethods,
} from '../pages/routes-page/route-create.page';
import RoutePage from '../pages/routes-page/routes.page';
import RouteDetailPage from '../pages/routes-page/route-detail.page';
import { Utils } from '../support/utils';

const routeName = 'demo-route';
const serviceName = 'service_name1';
describe('Kong Manager Tests', () => {
  before(() => {
    cy.dockerUp();
  });

  after(() => {
    Utils.deleteRouteByRouteName(routeName);
    Utils.deleteServiceByRouteName(serviceName);
    cy.dockerDown();
  });

  it('create new gateway service', () => {
    WorkspacesPage.visit();
    GatewayServicePage.visit().addAGatewayService();
    // TODO: use random params
    const url = 'https://api.kong-air.com/test';

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
    GatewayServiceDetailPage.getServiceID().then((id) => {
      cy.log(`Service ID: ${id}`);
    });
    //add a route to this service
    GatewayServiceDetailPage.addRouteToService();
    //go to route create page
    const routeTagName = 'route-tag1';
    const routePath = '/api/v1';
    const host = 'test.com';
    RoutesCreatePage.createBasicRoute(
      routeName,
      routeTagName,
      routePath,
      routesMethods.get,
      host
    );
    //then it will goto Routes page
    RoutePage.goToRouteDetailPage(routeName);
  });
});
