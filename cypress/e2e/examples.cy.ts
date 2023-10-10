describe('Examples', () => {
    it('should be setup properly', () => {
        cy.visit('/examples');
        cy.getByCy('title').should('be.visible').and('contain.text', 'Example Components')
        cy.getByCy('asset').should('be.visible');
        cy.getByCy('balance').should('be.visible');
        cy.getByCy('book').should('be.visible');
        cy.getByCy('cash-flow').should('be.visible');
        cy.getByCy('register').should('be.visible');
        cy.getByCy('report').should('be.visible');
        cy.getByCy('sale').should('be.visible');
    })
})
