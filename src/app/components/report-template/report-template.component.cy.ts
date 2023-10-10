import { ReportTemplateComponent } from './report-template.component'

describe('ReportTemplateComponent', () => {
  it('should mount', () => {
    cy.mount(ReportTemplateComponent)
  })

  it('should be setup properly', () => {
    cy.mount(ReportTemplateComponent)
    cy.getByCy('title').should('be.visible').and('contain.text', 'Report Examples')
    cy.getByCy('code-coverage-html').should('be.visible')
    cy.getByCy('code-coverage-cli').should('be.visible')
  })
})