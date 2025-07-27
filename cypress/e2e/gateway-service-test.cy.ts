// import loginPage from './pages/test.page';
import '../support/commands';
import workspacesPage from '../pages/workspace.page';
import gatewayServicePage from '../pages/gateway-services-page/gateway-services.page';
import gatewayServiceDetailPage from '../pages/gateway-services-page/gateway-service-detail.page';
import routesCreatePage, {
  RoutesMethods,
} from '../pages/routes-page/route-create.page';
import routePage from '../pages/routes-page/routes.page';
import routeDetailPage from '../pages/routes-page/route-detail.page';

const TestData = {
  service: {
    name: 'localhost-login',
    protocol: 'http',
    host: 'localhost',
    port: '1001',
    path: '/login',
    get url() {
      return `${this.protocol}://${this.host}:${this.port}${this.path}`;
    },
    tag: 'login-service-tag1',
  },
  route: {
    name: 'login-route1',
    path: '/api/login/v1',
    host: 'localhost',
    tag: 'route-tag1',
    method: 'GET',
  },
};

describe('Kong Manager Tests', () => {
  before(() => {
    cy.dockerUp();
    cy.verifyDockerIsUP();
  });

  after(() => {
    routePage.deleteRouteByRouteName(TestData.route.name);
    gatewayServicePage.deleteServiceByServiceName(TestData.service.name);
    cy.dockerDown();
  });

  it('create new gateway service and add a releated route', () => {
    workspacesPage.visit();
    //create a service
    gatewayServicePage.newGatewayService(
      TestData.service.url,
      TestData.service.name,
      TestData.service.tag
    )
    // simple assertion service
    gatewayServiceDetailPage.getServiceName()
      .should('eq', TestData.service.name);
    //add a route to this service
    gatewayServiceDetailPage.addRouteFromAlertMessage();
    //go to route create page
    routesCreatePage.createBasicRoute(
      TestData.route.name,
      TestData.route.tag,
      TestData.route.path,
      RoutesMethods.get,
      TestData.route.host
    );
    //then it will goto Routes page
    routePage.goToRouteDetailPage(TestData.route.name);
    //simple assertion route
    routeDetailPage.getRouteName().should('eq', TestData.route.name);

  });
});
