describe('Home', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Angular 16 - Cypress and Jest Setup for Code Coverage')
    cy.contains('Examples');
  })
})
