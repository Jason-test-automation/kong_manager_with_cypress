const baseUrl = 'http://localhost:8002';
const routePath = '/default/routes';

export const urls = {
  baseUrl: baseUrl,
  routesUrl: baseUrl + routePath,
};

export const routePageElements = {
  routeNameLabel: 'name',
};

export class RoutePage {
  visit() {
    cy.visit(urls.routesUrl);
    cy.waitForText('Routes');
    return this;
  }

  goToRouteDetailPage(routeName: string) {
    cy.contains(routeName).click();
    return this;
  }
}

export default new RoutePage();
