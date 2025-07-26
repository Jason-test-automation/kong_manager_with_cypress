import RoutePage from '../pages/routes-page/routes.page';
import RouteDetailPage from '../pages/routes-page/route-detail.page';
import GatewayServicePage from '../pages/gateway-services-page/gateway-services.page';
import GatewayServiceDetailPage from '../pages/gateway-services-page/gateway-service-detail.page';

export class Utils {
  public static getTestId(testId: string): string {
    return `[data-testid="${testId}"]`;
  }

  public static getMultiselectItemValue(value: string): string {
    return `select-item-${value}`;
  }

  public static deleteRouteByRouteName(routeName: string) {
    RoutePage.visit().goToRouteDetailPage(routeName);
    RouteDetailPage.deleteRoute(routeName);
  }

  public static deleteServiceByRouteName(serviceName: string) {
    GatewayServicePage.visit().goToServiceDetailPage(serviceName);
    GatewayServiceDetailPage.deleteService(serviceName);
  }
}
