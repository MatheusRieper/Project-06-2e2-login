# Project-06 – Cypress E2E Login Tests (DemoQA)

Este projeto contém testes automatizados E2E desenvolvidos com **Cypress**, focados no fluxo de **login válido e inválido** da aplicação **DemoQA**.

O objetivo principal é demonstrar:
- organização de testes
- uso de comandos customizados
- validações funcionais
- capacidade de diagnóstico em ambientes instáveis

---

## 🧪 Cenários testados

### ✅ Login válido
- Preenchimento de usuário e senha válidos
- Verificação de elementos que indicam login bem-sucedido (ex: botão *Log out*)

### ❌ Login inválido
- Usuário inválido
- Senha inválida
- Validação de mensagem de erro
- Confirmação de permanência na página de login

---

## 🛠️ Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

---

## 🧩 Estrutura do projeto

- `cypress/e2e/login.cy.js`  
  Contém os cenários de teste (login válido e inválido)

- `cypress/support/commands.js`  
  Comandos customizados reutilizáveis (`start`, `login`)

- `cypress/support/e2e.js`  
  Configurações globais do Cypress

---

## ⚠️ Observações importantes sobre o ambiente testado

O site **DemoQA** apresenta instabilidades conhecidas, como:
- scripts externos (cross-origin)
- anúncios dinâmicos
- iframes e carregamentos imprevisíveis

Durante o desenvolvimento, foram identificados **testes intermitentes (flaky tests)**, que podem passar ou falhar sem alteração no código, devido exclusivamente ao comportamento da aplicação.

Por esse motivo, foi utilizado o seguinte tratamento global:

```js
Cypress.on('uncaught:exception', () => false)
