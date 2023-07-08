Cypress.Commands.add("login", (username, password) => {
  cy.visit(Cypress.config().baseUrl); //baseUrl is defined in cypress.config.js

  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
  cy.url().should("include", "inventory");
});

Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});
