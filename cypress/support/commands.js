// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Startind the page
Cypress.Commands.add('start', () => {

    // Resolution Page
    cy.viewport(1440, 900)
    // start Page
    cy.visit('https://demoqa.com/login')
})

// Commands login
Cypress.Commands.add('login', (email, password) => {

    cy.get('#userName')
        .should('be.visible')
        .type(email)

    cy.get('#password')
        .should('be.visible')
        .type(password)

    cy.get('#login')
        .click()
})