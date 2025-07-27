import routePage from '../pages/routes-page/routes.page';
import routeDetailPage from '../pages/routes-page/route-detail.page';
import gatewayServicePage from '../pages/gateway-services-page/gateway-services.page';
import gatewayServiceDetailPage from '../pages/gateway-services-page/gateway-service-detail.page';

export class Utils {
  public static getTestId(testId: string): string {
    return `[data-testid="${testId}"]`;
  }

  public static getMultiselectItemValue(value: string): string {
    return `select-item-${value}`;
  }

  public static deleteRouteByRouteName(routeName: string) {
    routePage.visit().goToRouteDetailPage(routeName);
    routeDetailPage.deleteRoute(routeName);
  }

  public static deleteServiceByServiceName(serviceName: string) {
    gatewayServicePage.visit().goToServiceDetailPage(serviceName);
    gatewayServiceDetailPage.deleteService(serviceName);
  }
}
