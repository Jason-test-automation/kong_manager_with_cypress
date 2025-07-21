export const ServicesCreatePageElements = {
    fullUrlInput:'gateway-service-url-input'
};

export const urls = {
  
  serviceUrl:'/default/services/create',
  servicesCreateUrl:'/default/services/create'
}

export class GatewayServicePage {
  visit() {
    cy.visit(urls.servicesCreateUrl);
  }

  inputAndSave(){
    cy.locator(ServicesCreatePageElements.fullUrlInput).type('https://api.kong-air.com/test');
  }

  // typeUsername(username: string) {
  //   this.elements.usernameInput().type(username);
  // }

  // typePassword(password: string) {
  //   this.elements.passwordInput().type(password);
  // }

  // clickLogin() {
  //   this.elements.loginBtn().click();
  // }

  // submitLogin(username: string, password: string) {
  //   this.typeUsername(username);
  //   this.typePassword(password);
  //   this.clickLogin();
  // }
}

// export default new GatewayServicePage();