export const servicesCreatePageElements = {
    fullUrlInput:'gateway-service-url-input'
};

export const urls = {
  servicesCreateUrl:'/default/services/create'
}

export class KoneMangerHomePage {
  visit() {
    cy.visit('/');
    // enable method chaining
    return this;
  }

  clickDefauleWorkSpace(){
    cy.locator(servicesCreatePageElements.fullUrlInput).click();
    return this;
  }

}



export class GatewayServicePage {
  visit() {
    cy.visit(urls.servicesCreateUrl);
    return this;
  }

  inputAndSave(){
    cy.locator(servicesCreatePageElements.fullUrlInput).type('https://api.kong-air.com/test');
    return this;
  }

}

// export default new GatewayServicePage();