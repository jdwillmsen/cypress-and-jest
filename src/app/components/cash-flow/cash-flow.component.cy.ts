import {CashFlowComponent} from './cash-flow.component'

describe('CashFlowComponent', () => {
  it('should mount', () => {
    cy.mount(CashFlowComponent)
  })

  it('should be setup properly', () => {
    cy.mount(CashFlowComponent)
    cy.getByCy('cash-flow').should('be.visible').and('contain.text', 'cash-flow works!')
  })
})