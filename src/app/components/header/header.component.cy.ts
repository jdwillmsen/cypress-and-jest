import {HeaderComponent} from './header.component'
import {RouterTestingModule} from "@angular/router/testing";

describe('HeaderComponent', () => {
  it('should mount', () => {
    cy.mount(HeaderComponent)
  })

  it('should be setup properly with items input', () => {
    cy.mount(HeaderComponent, {
      imports: [RouterTestingModule],
      componentProperties: {
        items: [
          {
            display: 'Book',
            path: '/book'
          },
          {
            display: 'Sale',
            path: '/sale'
          },
          {
            display: 'Order',
            path: '/order'
          }
        ]
      }
    });
    cy.getByCy('book-button').should('be.visible').and('be.enabled').and('contain.text', 'Book');
    cy.getByCy('sale-button').should('be.visible').and('be.enabled').and('contain.text', 'Sale');
    cy.getByCy('order-button').should('be.visible').and('be.enabled').and('contain.text', 'Order');
  })
})