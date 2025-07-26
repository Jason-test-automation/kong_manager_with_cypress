export const gatewayServiceDetailPageElements = {
    serviceName: 'name-plain-text',
};

export class GatewayServiceDetailPage {
    getServiceName(): Cypress.Chainable<string> {
        return cy.get(`[data-testid="${gatewayServiceDetailPageElements.serviceName}"]`)
            .invoke('text')
            .then(text => text.trim());
    }

}

export default new GatewayServiceDetailPage();
