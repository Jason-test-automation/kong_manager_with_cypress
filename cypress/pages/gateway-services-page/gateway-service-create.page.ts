import { Utils } from '../../support/utils';

export const GatewayServicesCreatePageElements = {
  fullUrlInput: 'gateway-service-url-input',
  nameInput: 'gateway-service-name-input',
  saveBtn: 'service-create-form-submit',
  addTagesBtn: 'collapse-trigger-label',
  tagsInput: 'gateway-service-tags-input',
  formError: 'form-error',
};

export class GatewayServiceCreatePage {
  // create a new gateway service frome inputing the url, service name, expend tages field and enter a tag name. click save
  createNewGatewayServiceWithUrl(url: string, name: string, tagName: string): this {
    this.enterFullUrl(url);
    this.entername(name);
    this.clickAddTages();
    this.enterTags(tagName);
    this.clickSave();
    return this;
  }

  enterFullUrl(url: string): this {
    cy.getLocator(GatewayServicesCreatePageElements.fullUrlInput).clear().type(url);
    return this;
  }

  entername(name: string): this {
    cy.getLocator(GatewayServicesCreatePageElements.nameInput).clear().type(name);
    return this;
  }

  clickAddTages(): this {
    cy.getLocator(GatewayServicesCreatePageElements.addTagesBtn).eq(1).click();
    return this;
  }

  enterTags(tagName: string): this {
    cy.getLocator(GatewayServicesCreatePageElements.tagsInput).clear().type(tagName);
    return this;
  }

  // sometimes all the inputs entered with no error,but once click the save btn it will pop up an error form.
  clickSave(): this {
    cy.getLocator(GatewayServicesCreatePageElements.saveBtn)
      .click()
      .then(() => {
        cy.get('body').then(($body) => {
          if (
            //find expects a selector string, not a Cypress command. so can not use cy.getLocator()
            $body.find(Utils.getTestId(GatewayServicesCreatePageElements.formError))
              .length > 0
          ) {
            // error occured
            cy.wrap($body)
              .find(GatewayServicesCreatePageElements.formError)
              .should('not.exist');
          }
        });
      });
    return this;
  }
}

export default new GatewayServiceCreatePage();
