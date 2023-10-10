import {ReportComponent} from './report.component'

describe('ReportComponent', () => {
  it('should mount', () => {
    cy.mount(ReportComponent)
  })

  it('should be setup properly', () => {
    cy.mount(ReportComponent)
    cy.getByCy('report').should('be.visible').and('contain.text', 'report works!')
  })
})