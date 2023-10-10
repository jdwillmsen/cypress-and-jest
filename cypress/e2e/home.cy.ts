describe('Home', () => {
    it('should be setup properly', () => {
        cy.visit('/');
        cy.url().should('contain', '/home');
        cy.getByCy('title').should('be.visible').and('contain.text', 'Angular 16 - Cypress and Jest Setup for Code Coverage')
        cy.getByCy('p1').should('be.visible').and('not.be.empty');
        cy.getByCy('p2').should('be.visible').and('not.be.empty');
    })
})
