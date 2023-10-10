import {RegisterComponent} from './register.component'

describe('RegisterComponent', () => {
    it('should mount', () => {
        cy.mount(RegisterComponent)
    })

    it('should be setup properly', () => {
        cy.mount(RegisterComponent)
        cy.getByCy('register').should('be.visible').and('contain.text', 'register works!')
    })
})