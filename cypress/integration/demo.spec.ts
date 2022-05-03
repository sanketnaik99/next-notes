it("Testing Cypress Integration Test", () => {
  cy.visit("http://localhost:3000");

  cy.get("h1").contains("Welcome to Next.js!");

  cy.get("p").contains("Get started by editing");
});
