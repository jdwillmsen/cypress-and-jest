Cypress.Commands.add('getByCy', (selector: any, ...args: any[]) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});