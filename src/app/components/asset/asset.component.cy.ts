import {AssetComponent} from './asset.component'

describe('AssetComponent', () => {
  it('should mount', () => {
    cy.mount(AssetComponent)
  })

  it('should be setup properly', () => {
    cy.mount(AssetComponent)
    cy.getByCy('asset').should('be.visible').and('contain.text', 'asset works!')
  })
})