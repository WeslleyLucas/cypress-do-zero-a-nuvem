import { campos } from "../support/seletores/campos"

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(()=>{

cy.visit('./src/index.html')

  })
  it('verifica o título da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })
  it('preenche os campos obrigatorios e envia o formulario', ()=> {
cy.get(campos.primeiroNome).type('Weslley')
cy.get(campos.segundoNome).type('Lucas')
cy.get('#email').type('wes@teste.com')
cy.get('#open-text-area').type('teste teste teste testando tudo', {delay: 0})
cy.get('.button[type="submit"]').click()

cy.get('.success').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter email em formatacao invalida', () => {
cy.get('#firstName').type('Weslley')
cy.get('#lastName').type('Lucas')
cy.get('#email').type('wes.teste.com')
cy.get('#open-text-area').type('teste teste teste testando tudo', {delay: 0})
cy.get('.button[type="submit"]').click()

cy.get('.error').should('be.visible')
  })

  it('valida campo telefone aceitando apenas numeros', () => {
    cy.get('#firstName').type('Weslley')
cy.get('#lastName').type('Lucas')
cy.get('#email').type('wes.teste.com')
cy.get('#phone').type('abcd')
cy.get('#open-text-area').type('teste teste teste testando tudo', {delay: 0})
cy.get('.button[type="submit"]').click()

cy.get('#phone').should('have.value', '')
  })

  it('erro ao nao enviar telefone quando obrigatorio', () => {
cy.get('#firstName').type('Weslley')
cy.get('#lastName').type('Lucas')
cy.get('#email').type('wes.teste.com')
cy.get('#open-text-area').type('teste teste teste testando tudo', {delay: 0})
cy.get('#phone-checkbox').check()
cy.get('.button[type="submit"]').click()

  })

   it('preenche e limpa os campos', () => {
cy.get('#firstName').type('Weslley').clear()
cy.get('#lastName').type('Lucas').clear()
cy.get('#email').type('wes.teste.com').clear()
cy.get('#open-text-area').type('teste teste teste testando tudo', {delay: 0}).clear()
cy.contains('button', 'Enviar').click()

cy.get('#firstName').should('have.value', '')
  })

  it('validar mensagem de erro ao enviar formulario sem preencher campos obrigatorios', () => {
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('preenche os campos obrigatórios e submete', () => {
cy.preencheEsubmete()

cy.get('.success').should('be.visible')


  })

  it('seleciona produto por seu texto', () => {
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
  })

  it('seleciona produto pelo value', () => {
cy.get('#product')
.select('mentoria')
.should('have.value', 'mentoria')

  })

  it('seleciona um produto por seu indice', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  })

  it('marca o tipo de atedimento feedback', () => {

cy.get('input[type="radio"]').check('feedback')

  })

  it('marca cada tipo de atendimento', () => {
cy.get('input[type="radio"]')
.each(typeOfService => {
cy.wrap(typeOfService).check()
.should('be.checked')
})

  })
it('marcar ambos checkboxes e depois desmarcar o ultimo', () => {
  cy.get('#email-checkbox').check()
  cy.get('#phone-checkbox').check().last().uncheck()
})

it('seleciona um arquivo da pasta fixtures', () => {
  cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
  .should('have.value', 'C:\\fakepath\\example.json')
})

it('seleciona um arquivo de uma fixtures que foi dado um alias', () => {
  cy.fixture('example.json').as('exemplo')
 cy.get('input[type="file"]').selectFile('@exemplo')
  .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')
  })
})
it('verifica a politica de privacidade do site', ()=> {
 cy.contains('a', 'Política de Privacidade').should('have.attr', 'target', '_blank')

})
it('abre pagina de politica de privacidade clicando', ()=>{
cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target').click()
cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
})

it.only('encontre o gato', () => {
  cy.get('#white-background').find("span[id='cat']")
  .invoke('show').should('be.visible')
})
})


