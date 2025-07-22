export const servicesCreatePageElements = {
    fullUrlInput:'gateway-service-url-input',
    nameInput:'gateway-service-name-input',
    saveBtn:'service-create-form-submit',
    addTagesBtn:'collapse-trigger-label',
    tagsInput:'gateway-service-tags-input',
    formError:'form-error'
};


export class GatewayServicePage {
  createNewGatewayServiceWithUrl(url:string,name:string,tagName:string){
    cy.locator(servicesCreatePageElements.fullUrlInput).type(url);
    cy.locator(servicesCreatePageElements.nameInput).clear().type(name);
    cy.locator(servicesCreatePageElements.addTagesBtn).eq(1).click();
    cy.locator(servicesCreatePageElements.tagsInput).clear().type(tagName);
    cy.locator(servicesCreatePageElements.saveBtn).click();
    cy.get('body').then(($body) => {
        if (Cypress.$(cy.locator(servicesCreatePageElements.formError)).length > 0) {  // ✅ 使用 Cypress.$ 同步检查
            cy.locator(servicesCreatePageElements.saveBtn).click();
        }
    });
    
    return this;
  }

}

export default new GatewayServicePage()