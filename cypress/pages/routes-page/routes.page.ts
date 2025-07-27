import { RouteDetailPage } from './route-detail.page';

const ROUTES_URL = {
  baseUrl: 'http://localhost:8002',
  path: '/default/routes',
  get routesUrl() {
    return `${this.baseUrl}${this.path}`;
  },
};

export const RoutePageElements = {
  routeNameLabel: 'name',
};

export class RoutePage {
  constructor(
    private routeDetailPage: RouteDetailPage = new RouteDetailPage()
  ) {}

  deleteRouteByRouteName(routeName: string) {
    this.visit().goToRouteDetailPage(routeName);
    this.routeDetailPage.deleteRoute(routeName);
  }

  visit() {
    cy.visit(ROUTES_URL.routesUrl);
    cy.waitForText('Routes');
    return this;
  }

  goToRouteDetailPage(routeName: string) {
    cy.contains(routeName).click();
    return this;
  }
}

export default new RoutePage();
