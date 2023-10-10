describe('Reports', () => {
    it('should be setup properly', () => {
        cy.visit('/reports');
        cy.url().should('contain', '/reports');
        cy.getByCy('title').should('be.visible').and('contain.text', 'Report Examples')
        cy.getByCy('code-coverage-html').should('be.visible')
        cy.getByCy('code-coverage-cli').should('be.visible')
    })
})
