const baseUrl  = 'http://localhost:8002';
const serviceCrearePath = '/default/services/create'

export const urls = {
  baseUrl:baseUrl,
  servicesCreateUrl:baseUrl + serviceCrearePath
}

export const workspacesPageElements = {
    defaultWorkspaceBtn:'workspace-link-default',
    addAGatewayServiceBtn:'action-button'

};

export class WorkspacesPage {
  visit() {
    cy.visit(urls.baseUrl);
    // enable method chaining
    return this;
  }

  defauleWorkSpaceClick(){
    cy.locator(workspacesPageElements.defaultWorkspaceBtn).click();
    return this;
  }

  addAGatewayServiceClick(){
    cy.locator(workspacesPageElements.addAGatewayServiceBtn).click();
    return this;
  }
}

export default new WorkspacesPage()
