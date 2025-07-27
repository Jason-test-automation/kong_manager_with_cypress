import { RoutePageElements } from './routes.page';
export const RoutesCreatePageElements = {
  routeNameInput: 'route-form-name',
  tagsInput: 'route-form-tags',
  pathInput: 'route-form-paths-input-1',
  methodsListBox: 'multiselect-trigger',
  hostInput: 'route-form-hosts-input-1',
  saveBtn: 'route-create-form-submit',
};

export const RoutesMethods = {
  get: 'multiselect-item-GET',
  put: 'multiselect-item-PUT',
  post: 'multiselect-item-POST',
  patch: 'multiselect-item-PATCH',
  delete: 'multiselect-item-DELETE',
  options: 'multiselect-item-OPTIONS',
  head: 'multiselect-item-HEAD',
  connect: 'multiselect-item-CONNECT',
  trace: 'multiselect-item-TRACE',
};

export class RoutesCreatePage {
  // get into this page from service detail page
  // create a new gateway service frome inputing the url, service name, expend tages field and enter a tag name. click save
  createBasicRoute(
    routeName: string,
    tagsName: string,
    pathName: string,
    method: string,
    host: string
  ): this {
    this.enterRouteName(routeName);
    this.enterTagsName(tagsName);
    this.enterPathName(pathName);
    this.selectMethods(method);
    this.enterHost(host);
    this.clickSave();
    //route should exist
    cy.getLocator(RoutePageElements.routeNameLabel)
      .find(`:contains(${routeName})`)
      .should('exist');
    return this;
  }

  enterRouteName(routeName: string): this {
    cy.getLocator(RoutesCreatePageElements.routeNameInput).type(routeName);
    return this;
  }

  enterTagsName(tagsName: string): this {
    cy.getLocator(RoutesCreatePageElements.tagsInput).type(tagsName);
    return this;
  }

  enterPathName(pathName: string): this {
    cy.getLocator(RoutesCreatePageElements.pathInput).type(pathName);
    return this;
  }

  selectMethods(method: string): this {
    cy.getLocator(RoutesCreatePageElements.methodsListBox).click();
    cy.getLocator(RoutesMethods.get).click();
    cy.getLocator(RoutesCreatePageElements.methodsListBox).click();
    return this;
  }

  enterHost(host: string): this {
    cy.getLocator(RoutesCreatePageElements.hostInput).type(host);
    return this;
  }

  clickSave(): this {
    cy.getLocator(RoutesCreatePageElements.saveBtn).click();
    return this;
  }
}

export default new RoutesCreatePage();
