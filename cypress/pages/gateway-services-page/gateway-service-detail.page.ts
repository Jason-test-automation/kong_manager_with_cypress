import { Utils } from '../../support/utils';

export const gatewayServiceDetailPageElements = {
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
  addRouteFromAlertMessage() {
    cy.contains('button[type="button"]', 'Add a Route').click();
  }

  //add routes from left side Routes tab
  addRoutes() {
    cy.getLocator(gatewayServiceDetailPageElements.routesTab).click();
    cy.get('body').then(($body) => {
      if (
        $body.find(Utils.getTestId(gatewayServiceDetailPageElements.newRoute))
          .length > 0
      ) {
        cy.getLocator(gatewayServiceDetailPageElements.newRoute).click();
      } else {
        cy.getLocator(gatewayServiceDetailPageElements.toolbarNewRoute).click();
      }
    });
    return this;
  }

  deleteService(serviceName: string) {
    this.clickServiceActions();
    this.clickDelete();
    this.typeServiceName(serviceName);
    this.clickYesDelete();
  }

  getServiceName(): Cypress.Chainable<string> {
    return cy
      .getLocator(gatewayServiceDetailPageElements.serviceName)
      .invoke('text')
      .then((text) => text.trim());
  }

  getServiceID(): Cypress.Chainable<string> {
    return (
      cy
        .getLocator(gatewayServiceDetailPageElements.serviceID)
        .invoke('text')
        // element text end with Copy ID need to replace to ''
        .then((text) => {
          return text.replace('Copy ID', '').trim();
        })
    );
  }

  clickServiceActions() {
    cy.getLocator(
      gatewayServiceDetailPageElements.gatewayServiceActions
    ).click();
    return this;
  }

  clickDelete() {
    cy.contains('Delete').click();
    return this;
  }

  typeServiceName(serviceName: string) {
    cy.getLocator(
      gatewayServiceDetailPageElements.deleteServiceConfirmInput
    ).type(serviceName);
    return this;
  }

  clickYesDelete() {
    cy.getLocator(gatewayServiceDetailPageElements.yesDeleteBtn).click();
    return this;
  }
}

export default new GatewayServiceDetailPage();
