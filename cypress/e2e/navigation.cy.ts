describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should be able to go to all the routes', () => {
        cy.url().should('contain', '/home');
        cy.visit('/reports');
        cy.url().should('contain', '/reports');
        cy.visit('/examples');
        cy.url().should('contain', '/examples');
        cy.visit('/home');
        cy.url().should('contain', '/home')
    })

    it('should be able to navigate to all the routes with header buttons', () => {
        cy.getByCy('home-button').click();
        cy.url().should('contain', '/home');
        cy.getByCy('reports-button').click();
        cy.url().should('contain', '/reports');
        cy.getByCy('examples-button').click();
        cy.url().should('contain', '/examples');
    })
})
