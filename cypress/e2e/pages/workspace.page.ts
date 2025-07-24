const baseUrl = 'http://localhost:8002';
const serviceCrearePath = '/default/services/create';

export const urls = {
  baseUrl: baseUrl,
  servicesCreateUrl: baseUrl + serviceCrearePath,
};

export const workspacesPageElements = {
  defaultWorkspaceBtn: 'workspace-link-default',
  addAGatewayServiceBtn: 'action-button',
  servicesNumber: 'Services',
  gatwayServicesTab: 'sidebar-item-gateway-services'
};

export class WorkspacesPage {
  deleteService() {
    cy.getLocator(workspacesPageElements.servicesNumber)
      .invoke('text')
      .then(text => {
        const num = parseInt(text.trim(), 10);
        cy.log('==============', num)
        if (num > 0) {
          this.clickDefauleWorkSpace()
          cy.get('.sidebar-menu-toggle').then(($el) => {
            if ($el.is(':visible')) {
              cy.wrap($el).click();
              cy.getLocator(workspacesPageElements.gatwayServicesTab).click()
            } else {
              cy.getLocator(workspacesPageElements.gatwayServicesTab).click()
            }
          });

        }
      });
  }

  visit() {
    cy.visit(urls.baseUrl);
    // enable method chaining
    return this;
  }

  clickDefauleWorkSpace() {
    cy.getLocator(workspacesPageElements.defaultWorkspaceBtn).click();
    return this;
  }

  clickAddAGatewayService() {
    cy.getLocator(workspacesPageElements.addAGatewayServiceBtn).click();
    return this;
  }
}

export default new WorkspacesPage();
