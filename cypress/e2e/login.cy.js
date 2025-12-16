describe('login', () => {

  // Rodand Page, Apagina de login pode apresentar lentidão devido a scripts externos
  beforeEach(() => {
    // startind the page 
    cy.start()
    // Verification the login page
    cy.url().should('include', '/login')
  })

  // Valid Login
  describe('successfull', () => {

    it('Valid login', () => {

      cy.login('test', 'Qa@2025Test')
      cy.url().should('include', '/profile')

    })
  })

  describe('Invalid Login', () => {

    it('Invalid E-mail', () => {

      cy.login('testando', 'Qa@2025Test')

      // Message Error
      cy.get('#name')
        .should('contain.text', 'Invalid username or password!')

      // Verification the login page
      cy.url().should('include', '/login')
    })

    it('Invalid Password', () => {

      cy.login('test', '123456')

      // Message Error
      cy.get('#name')
        .should('contain.text', 'Invalid username or password!')

      // Verification the login page
      cy.url().should('include', '/login')
    })
  })

})