describe('login', () => {

  beforeEach(() => {

    cy.openPage()
    cy.url().should('include', '/login')
  })

  // ---------- SUCCESSFULL LOGIN ----------
  describe('successfull login', () => {

    it('should login registered', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )

      cy.url({ timeout: 10000 }).should('include', '/profile')
    })
  })

  // ---------- INVALID LOGIN ----------

  const INVALID_USER = 'test'
  const INVALID_PASS = 'pass'

  describe('Invalid Login', () => {

    it('should not login with invalid E-mail', () => {

      cy.login(
        INVALID_USER,
        Cypress.env('ADMIN_PASS')
      )

      cy.get('#name', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Invalid username or password')

      cy.url().should('include', '/login')
    })

    it('should not login with invalid Password', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        INVALID_PASS
      )

      cy.get('#name', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Invalid username or password')

      cy.url().should('include', '/login')
    })
  })

})