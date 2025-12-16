// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

    //  Site esta apresentando ERRO ao Iniciar ele. Colocarei a baixo codigo para ignorar erro. Fara com que ele fique LENTO!!!
    // Ignorando exceções de scripts externos (DemoQA possui instabilidades conhecidas)
    Cypress.on('uncaught:exception', () => (false))