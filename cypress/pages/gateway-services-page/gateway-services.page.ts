import { Utils } from '../../support/utils';

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
        cy.getLocator(gatewayServicePageElements.newGatewayServiceBtn).click();
      } else {
        //create a new service
        cy.getLocator(
          gatewayServicePageElements.newGatewayServiceEmptyBtn
        ).click();
      }
    });
    return this;
  }

  goToServiceDetailPage(serviceName: string) {
    cy.contains(serviceName).click();
    return this;
  }
}

export default new GatewayServicePage();
