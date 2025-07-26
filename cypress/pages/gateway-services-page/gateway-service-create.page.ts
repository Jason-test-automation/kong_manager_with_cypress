import { Utils } from '../../support/utils';

export const servicesCreatePageElements = {
  fullUrlInput: 'gateway-service-url-input',
  nameInput: 'gateway-service-name-input',
  saveBtn: 'service-create-form-submit',
  addTagesBtn: 'collapse-trigger-label',
  tagsInput: 'gateway-service-tags-input',
  formError: 'form-error',
};

export class ServiceCreatePage {
  // create a new gateway service frome inputing the url, service name, expend tages field and enter a tag name. click save
  createNewGatewayServiceWithUrl(url: string, name: string, tagName: string) {
    this.enterFullUrl(url);
    this.entername(name);
    this.clickAddTages();
    this.enterTags(tagName);
    this.clickSave();
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

  // sometimes all the inputs entered with no error,but once click the save btn it will pop up an error form.
  clickSave() {
    cy.getLocator(servicesCreatePageElements.saveBtn)
      .click()
      .then(() => {
        cy.get('body').then(($body) => {
          if (
            //find expects a selector string, not a Cypress command. so can not use cy.getLocator()
            $body.find(Utils.getTestId(servicesCreatePageElements.formError))
              .length > 0
          ) {
            // error occured
            cy.wrap($body)
              .find(servicesCreatePageElements.formError)
              .should('not.exist');
          }
        });
      });
    return this;
  }
}

export default new ServiceCreatePage();
