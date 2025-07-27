export const RouteDetailPageElements = {
  routeActionsBtn: 'header-actions',
  deleteRouteConfirmInput: 'confirmation-input',
  yesDeleteBtn: 'modal-action-button',
  routeName: 'name-plain-text',
};

export class RouteDetailPage {
  deleteRoute(routeName: string): this {
    this.clickRouteActions();
    this.clickDelete();
    this.typeRouteName(routeName);
    this.clickYesDelete();
    return this;
  }

  getRouteName(): Cypress.Chainable<string> {
    return cy
      .getLocator(RouteDetailPageElements.routeName)
      .invoke('text')
      .then((text) => text.trim());
  }

  clickRouteActions(): this {
    cy.getLocator(RouteDetailPageElements.routeActionsBtn).click();
    return this;
  }

  clickDelete(): this {
    cy.contains('Delete').click();
    return this;
  }

  typeRouteName(routeName: string): this {
    cy.getLocator(RouteDetailPageElements.deleteRouteConfirmInput).type(
      routeName
    );
    return this;
  }

  clickYesDelete() {
    cy.getLocator(RouteDetailPageElements.yesDeleteBtn).click();
    return this;
  }
}

export default new RouteDetailPage();
