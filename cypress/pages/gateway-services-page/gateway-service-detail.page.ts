import { Utils } from '../../support/utils';

export const GatewayServiceDetailPageElements = {
  serviceName: 'name-plain-text',
  serviceID: 'id-copy-uuid',
  gatewayServiceActions: 'header-actions',
  deleteServiceConfirmInput: 'confirmation-input',
  yesDeleteBtn: 'modal-action-button',
  routesTab: 'service-routes',
  newRoute: 'empty-state-action',
  toolbarNewRoute: 'toolbar-add-route',
};

export class GatewayServiceDetailPage {
  //if there is no route
  addRouteFromAlertMessage(): this {
    cy.contains('button[type="button"]', 'Add a Route').click();
    return this;
  }

  //add routes from left side Routes tab
  addRoutes(): this {
    cy.getLocator(GatewayServiceDetailPageElements.routesTab).click();
    cy.get('body').then(($body) => {
      if (
        $body.find(Utils.getTestId(GatewayServiceDetailPageElements.newRoute))
          .length > 0
      ) {
        cy.getLocator(GatewayServiceDetailPageElements.newRoute).click();
      } else {
        cy.getLocator(GatewayServiceDetailPageElements.toolbarNewRoute).click();
      }
    });
    return this;
  }

  deleteService(serviceName: string): this {
    this.clickServiceActions();
    this.clickDelete();
    this.typeServiceName(serviceName);
    this.clickYesDelete();
    return this;
  }

  getServiceName(): Cypress.Chainable<string> {
    return cy
      .getLocator(GatewayServiceDetailPageElements.serviceName)
      .invoke('text')
      .then((text) => text.trim());
  }

  getServiceID(): this {
    cy.getLocator(GatewayServiceDetailPageElements.serviceID)
      .invoke('text')
      // element text end with Copy ID need to replace to ''
      .then((text) => {
        return text.replace('Copy ID', '').trim();
      });
    return this;
  }

  clickServiceActions(): this {
    cy.getLocator(
      GatewayServiceDetailPageElements.gatewayServiceActions
    ).click();
    return this;
  }

  clickDelete(): this {
    cy.contains('Delete').click();
    return this;
  }

  typeServiceName(serviceName: string): this {
    cy.getLocator(
      GatewayServiceDetailPageElements.deleteServiceConfirmInput
    ).type(serviceName);
    return this;
  }

  clickYesDelete(): this {
    cy.getLocator(GatewayServiceDetailPageElements.yesDeleteBtn).click();
    return this;
  }
}

export default new GatewayServiceDetailPage();
