import {SaleComponent} from './sale.component'

describe('SaleComponent', () => {
  it('should mount', () => {
    cy.mount(SaleComponent)
  })

  it('should be setup properly', () => {
    cy.mount(SaleComponent)
    cy.getByCy('sale').should('be.visible').and('contain.text', 'sale works!')
  })
})