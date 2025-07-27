export const routeDetailPageElements = {
  routeActionsBtn: 'header-actions',
  deleteRouteConfirmInput: 'confirmation-input',
  yesDeleteBtn: 'modal-action-button',
  routeName: 'name-plain-text',
};

export class RouteDetailPage {
  deleteRoute(routeName: string) {
    this.clickRouteActions();
    this.clickDelete();
    this.typeRouteName(routeName);
    this.clickYesDelete();
  }

  getRouteName(): Cypress.Chainable<string> {
    return cy
      .getLocator(routeDetailPageElements.routeName)
      .invoke('text')
      .then((text) => text.trim());
  }

  clickRouteActions() {
    cy.getLocator(routeDetailPageElements.routeActionsBtn).click();
    return this;
  }

  clickDelete() {
    cy.contains('Delete').click();
    return this;
  }

  typeRouteName(routeName: string) {
    cy.getLocator(routeDetailPageElements.deleteRouteConfirmInput).type(
      routeName
    );
    return this;
  }

  clickYesDelete() {
    cy.getLocator(routeDetailPageElements.yesDeleteBtn).click();
    return this;
  }
}

export default new RouteDetailPage();
