import {BookComponent} from './book.component'

describe('BookComponent', () => {
  it('should mount', () => {
    cy.mount(BookComponent)
  })

  it('should be setup properly', () => {
    cy.mount(BookComponent)
    cy.getByCy('book').should('be.visible').and('contain.text', 'book works!')
  })
})