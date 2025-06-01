Cypress.Commands.add('preencheEsubmete', () => {

    cy.get('#firstName').type('Weslley')
cy.get('#lastName').type('Lucas')
cy.get('#email').type('wes@teste.com')
cy.get('#open-text-area').type('teste teste teste testando tudo', {delay: 0})
cy.get('.button[type="submit"]').click()
})