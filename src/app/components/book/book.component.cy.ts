import { BookComponent } from './book.component'

describe('BookComponent', () => {
  it('should mount', () => {
    cy.mount(BookComponent)
  })
})