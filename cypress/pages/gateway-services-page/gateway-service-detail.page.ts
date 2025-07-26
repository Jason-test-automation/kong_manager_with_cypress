export const gatewayServiceDetailPageElements = {
  serviceName: 'name-plain-text',
  serviceID: 'id-copy-uuid',
  gatewayServiceActions: 'header-actions',
  deleteServiceConfirmInput: 'confirmation-input',
  yesDeleteBtn: 'modal-action-button',
};

export class GatewayServiceDetailPage {
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

  addRouteToService() {
    cy.contains('button[type="button"]', 'Add a Route').click();
  }

  deleteService(serviceName: string) {
    this.clickServiceActions();
    this.clickDelete();
    this.typeServiceName(serviceName);
    this.clickYesDelete();
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
