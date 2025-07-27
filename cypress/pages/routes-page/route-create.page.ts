import { Utils } from '../../support/utils';
import { routePageElements } from './routes.page';
export const routesCreatePageElements = {
  routeNameInput: 'route-form-name',
  tagsInput: 'route-form-tags',
  pathInput: 'route-form-paths-input-1',
  methodsListBox: 'multiselect-trigger',
  hostInput: 'route-form-hosts-input-1',
  saveBtn: 'route-create-form-submit',
};

export const routesMethods = {
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
  ) {
    this.enterRouteName(routeName);
    this.enterTagsName(tagsName);
    this.enterPathName(pathName);
    this.selectMethods(method);
    this.enterHost(host);
    this.clickSave();
    //route should exist
    cy.getLocator(routePageElements.routeNameLabel)
      .find(`:contains(${routeName})`)
      .should('exist');
    return this;
  }

  enterRouteName(routeName: string) {
    cy.getLocator(routesCreatePageElements.routeNameInput).type(routeName);
    return this;
  }

  enterTagsName(tagsName: string) {
    cy.getLocator(routesCreatePageElements.tagsInput).type(tagsName);
    return this;
  }

  enterPathName(pathName: string) {
    cy.getLocator(routesCreatePageElements.pathInput).type(pathName);
    return this;
  }

  selectMethods(method: string) {
    cy.getLocator(routesCreatePageElements.methodsListBox).click();
    cy.getLocator(routesMethods.get).click();
    cy.getLocator(routesCreatePageElements.methodsListBox).click();
    return this;
  }

  enterHost(host: string) {
    cy.getLocator(routesCreatePageElements.hostInput).type(host);
    return this;
  }

  clickSave() {
    cy.getLocator(routesCreatePageElements.saveBtn).click();
    return this;
  }
}

export default new RoutesCreatePage();
