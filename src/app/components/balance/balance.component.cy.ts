import {BalanceComponent} from './balance.component'

describe('BalanceComponent', () => {
  it('should mount', () => {
    cy.mount(BalanceComponent)
  })

  it('should be setup properly', () => {
    cy.mount(BalanceComponent)
    cy.getByCy('balance').should('be.visible').and('contain.text', 'balance works!')
  })
})