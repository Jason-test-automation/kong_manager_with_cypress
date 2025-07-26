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
  gatwayServicesTab: 'sidebar-item-gateway-services',
};

export class WorkspacesPage {
  visit() {
    cy.visit(urls.baseUrl);
    cy.waitForText('Workspaces');
    // enable method chaining
    return this;
  }

  clickDefauleWorkSpace() {
    cy.getLocator(workspacesPageElements.defaultWorkspaceBtn).click();
    cy.waitForText('Overview');
    return this;
  }

  clickAddAGatewayService() {
    cy.getLocator(workspacesPageElements.addAGatewayServiceBtn).click();
    cy.waitForText('New Gateway Service');
    return this;
  }
}

export default new WorkspacesPage();
