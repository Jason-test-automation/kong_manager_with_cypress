import { Utils } from '../../support/utils';
import { GatewayServiceCreatePage } from './gateway-service-create.page';
import { GatewayServiceDetailPage } from './gateway-service-detail.page';

const SERVICE_URL = {
  baseUrl: 'http://localhost:8002',
  path: '/default/services',
  get gateServicesUrl() {
    return `${this.baseUrl}${this.path}`;
  },
};

export const GatewayServicePageElements = {
  newGatewayServiceEmptyBtn: 'empty-state-action',
  newGatewayServiceBtn: 'toolbar-add-gateway-service',
  serviceNameTable: 'table-header-name',
};

export class GatewayServicePage {
  // use readonly to enhance the security and maintainability of the code.
  constructor(
    private readonly createPage: GatewayServiceCreatePage = new GatewayServiceCreatePage(),
    private readonly detailPage: GatewayServiceDetailPage = new GatewayServiceDetailPage()
  ) {}

  newGatewayService(
    url: string,
    serviceName: string,
    serviceTagName: string
  ): this {
    this.visit().addAGatewayService();
    this.createPage.createNewGatewayServiceWithUrl(
      url,
      serviceName,
      serviceTagName
    );
    return this;
  }

  deleteServiceByServiceName(serviceName: string): this {
    this.visit().goToServiceDetailPage(serviceName);
    this.detailPage.deleteService(serviceName);
    return this;
  }

  visit() {
    cy.visit(SERVICE_URL.gateServicesUrl, { timeout: 10000 });
    cy.wait(5000);
    cy.get('body', { timeout: 10000 }).should('be.visible');
    return this;
  }

  addAGatewayService(): this {
    cy.get('body').then(($body) => {
      if (
        $body.find(Utils.getTestId(GatewayServicePageElements.serviceNameTable))
          .length > 0
      ) {
        //already have a service
        this.addMoreService();
      } else {
        //create a new service
        this.addService();
      }
    });
    return this;
  }

  addService(): this {
    cy.getLocator(GatewayServicePageElements.newGatewayServiceEmptyBtn).click();
    return this;
  }

  addMoreService(): this {
    cy.getLocator(GatewayServicePageElements.newGatewayServiceBtn).click();
    return this;
  }

  goToServiceDetailPage(serviceName: string): this {
    cy.contains(serviceName).click();
    return this;
  }
}

export default new GatewayServicePage();
