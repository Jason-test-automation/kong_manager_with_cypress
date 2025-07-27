const WORKSPACE_URL = {
  baseUrl: 'http://localhost:8002',
};

export const WorkspacesPageElements = {
  defaultWorkspaceBtn: 'workspace-link-default',
  addAGatewayServiceBtn: 'action-button',
  servicesNumber: 'Services',
  gatwayServicesTab: 'sidebar-item-gateway-services',
};

export class WorkspacesPage {
  visit() {
    cy.visit(WORKSPACE_URL.baseUrl);
    cy.waitForText('Workspaces');
    // enable method chaining
    return this;
  }

  clickDefauleWorkSpace() {
    cy.getLocator(WorkspacesPageElements.defaultWorkspaceBtn).click();
    cy.waitForText('Overview');
    return this;
  }

  clickAddAGatewayService() {
    cy.getLocator(WorkspacesPageElements.addAGatewayServiceBtn).click();
    cy.waitForText('New Gateway Service');
    return this;
  }
}

export default new WorkspacesPage();
