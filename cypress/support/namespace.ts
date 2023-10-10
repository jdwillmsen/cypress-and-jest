declare namespace Cypress {
    interface Chainable<Subject = any> {
        getByCy(selector: any, ...args: any[]): Cypress.Chainable<any>;
    }
}