describe("Counter Page Tests", () => {
  it("Should increment count when the + button is clicked", () => {
    cy.visit("/counter");
    //   Check if Title is ok
    cy.get("[data-cy=counter-page-title]").contains("Counter");

    // Find counter value and Check if it is 0 initially
    cy.get("[data-cy=count]").should("have.text", "0");

    // Click the increment button
    cy.get("[data-cy=increment-button]").click();

    // Check Counter Value
    cy.get("[data-cy=count]").should("have.text", "1");

    // Click the increment button x 2
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=increment-button]").click();

    // Check Counter Value
    cy.get("[data-cy=count]").should("have.text", "3");
  });

  it("Should decrement count when the - button is clicked", () => {
    // Check Counter Value
    cy.get("[data-cy=count]").should("have.text", "3");

    // Click the decrement button x 4
    cy.get("[data-cy=decrement-button]").click();
    cy.get("[data-cy=decrement-button]").click();
    cy.get("[data-cy=decrement-button]").click();
    cy.get("[data-cy=decrement-button]").click();

    // Check Counter Value
    cy.get("[data-cy=count]").should("have.text", "-1");
  });
});
