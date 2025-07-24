export const servicesCreatePageElements = {
  fullUrlInput: 'gateway-service-url-input',
  nameInput: 'gateway-service-name-input',
  saveBtn: 'service-create-form-submit',
  addTagesBtn: 'collapse-trigger-label',
  tagsInput: 'gateway-service-tags-input',
  formError: 'form-error',
};

export class GatewayServicePage {
  createNewGatewayServiceWithUrl(url: string, name: string, tagName: string) {
    this.enterFullUrl(url);
    this.entername(name);
    this.clickAddTages();
    this.enterTags(tagName);
    this.clickSave();
    this.clickSaveAfterFormError();
    return this;
  }

  enterFullUrl(url: string) {
    cy.getLocator(servicesCreatePageElements.fullUrlInput).type(url);
    return this;
  }

  entername(name: string) {
    cy.getLocator(servicesCreatePageElements.nameInput).clear().type(name);
    return this;
  }

  clickAddTages() {
    cy.getLocator(servicesCreatePageElements.addTagesBtn).eq(1).click();
    return this;
  }

  enterTags(tagName: string) {
    cy.getLocator(servicesCreatePageElements.tagsInput).clear().type(tagName);
    return this;
  }

  clickSave() {
    cy.getLocator(servicesCreatePageElements.saveBtn).click();
    return this;
  }

  clickSaveAfterFormError() {
    cy.get('body').then(($body) => {
      if (
        Cypress.$(cy.getLocator(servicesCreatePageElements.formError)).length >
        0
      ) {
        cy.getLocator(servicesCreatePageElements.saveBtn).click();
      }
    });
    return this;
  }
}

export default new GatewayServicePage();
