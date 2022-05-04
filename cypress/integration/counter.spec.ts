it("Testing Counter Page", () => {
  cy.visit("http://localhost:3000/counter");

  //   Check if Title is ok
  cy.get("h1").contains("Counter");

  // Find counter value and Check if it is 0 initially
  cy.get(".counter").should("have.text", "0");

  // Click the increment button
  cy.get(".increment").click();

  // Check Counter Value
  cy.get(".counter").should("have.text", "1");

  // Click the increment button x 2
  cy.get(".increment").click();
  cy.get(".increment").click();

  // Check Counter Value
  cy.get(".counter").should("have.text", "3");

  // Click the decrement button x 4
  cy.get(".decrement").click();
  cy.get(".decrement").click();
  cy.get(".decrement").click();
  cy.get(".decrement").click();

  // Check Counter Value
  cy.get(".counter").should("have.text", "-1");
});
