import { Utils } from '../../support/utils';
import serviceCreatePage from './gateway-service-create.page';

const baseUrl = 'http://localhost:8002';
const servicePath = '/default/services';

export const urls = {
  baseUrl: baseUrl,
  gateServicesUrl: baseUrl + servicePath,
};

export const gatewayServicePageElements = {
  newGatewayServiceEmptyBtn: 'empty-state-action',
  newGatewayServiceBtn: 'toolbar-add-gateway-service',
  serviceNameTable: 'table-header-name',
};

export class GatewayServicePage {
  newGatewayService(url: string, serviceName: string, serviceTagName: string) {
    this.visit().addAGatewayService();
    serviceCreatePage.createNewGatewayServiceWithUrl(
      url,
      serviceName,
      serviceTagName
    );
  }

  visit() {
    cy.visit(urls.gateServicesUrl, { timeout: 10000 });
    cy.wait(5000);
    cy.get('body', { timeout: 10000 }).should('be.visible');
    return this;
  }

  addAGatewayService() {
    cy.get('body').then(($body) => {
      if (
        $body.find(Utils.getTestId(gatewayServicePageElements.serviceNameTable))
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

  addService() {
    cy.getLocator(gatewayServicePageElements.newGatewayServiceEmptyBtn).click();
    return this;
  }

  addMoreService() {
    cy.getLocator(gatewayServicePageElements.newGatewayServiceBtn).click();
    return this;
  }

  goToServiceDetailPage(serviceName: string) {
    cy.contains(serviceName).click();
    return this;
  }
}

export default new GatewayServicePage();
