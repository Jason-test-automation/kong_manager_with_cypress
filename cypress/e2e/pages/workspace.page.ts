const baseUrl = 'http://localhost:8002';
const serviceCrearePath = '/default/services/create';

export const urls = {
  baseUrl: baseUrl,
  servicesCreateUrl: baseUrl + serviceCrearePath,
};

export const workspacesPageElements = {
  defaultWorkspaceBtn: 'workspace-link-default',
  addAGatewayServiceBtn: 'action-button',
};

export class WorkspacesPage {
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
