const baseUrl = 'http://localhost:8002';
const servicePath = '/default/services';

export const urls = {
    baseUrl: baseUrl,
    gateServicesUrl: baseUrl + servicePath,
};

export const gatewayServicePageElements = {
    newGatewayServiceEmptyBtn: 'empty-state-action',
};

export class GatewayServicePage {
    visit() {
        cy.visit(urls.gateServicesUrl, { timeout: 10000 });
        cy.wait(5000)
        cy.get('body', { timeout: 10000 }).should('be.visible');
        return this;
    }

    addAGatewayService() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Configure a New Gateway Service')) {
                cy.getLocator(gatewayServicePageElements.newGatewayServiceEmptyBtn).click();

            } else {
                cy.log('Text not found, skipping click.');
            }
        });
        cy.waitForText('New Gateway Service');
        return this;
    }

}

export default new GatewayServicePage();
