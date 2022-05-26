describe("Home Page Tests", () => {
  const noteTitles: string[] = ["Title 1", "Title 2", "Title 3", "Title 4"];
  const noteContents: string[] = [
    "She was sad to hear that fireflies are facing extinction due to artificial light, habitat loss, and pesticides.",
    "She had convinced her kids that any mushroom found on the ground would kill them if they touched it.",
    "Waffles are always better without fire ants and fleas.",
    "The golden retriever loved the fireworks each Fourth of July.",
  ];

  beforeEach(() => {
    cy.visit("/");
  });

  it("Form Validation Should fail when no title and content are present", () => {
    // Click submit button without entering anything
    cy.get("[data-cy=add-note-submit]").click();

    // Both fields should show the error message
    cy.contains("A title is required").should("exist");
    cy.contains("Note content is required").should("exist");
    // cy.get("p#title-helper-text").should("have.text", "A title is required");
    // cy.get("p#content-helper-text").should(
    //   "have.text",
    //   "Note content is required"
    // );
  });

  it("Form Validation Should fail when the title is too short.", () => {
    // Enter invalid title
    cy.get("[data-cy=title-input]").type("Ab");

    // Click the button
    cy.get("[data-cy=add-note-submit]").click();

    // Invalid title message should be displayed.
    cy.contains("Please enter a valid title").should("exist");
    // cy.get("p#title-helper-text").should(
    //   "have.text",
    //   "Please enter a valid title"
    // );
  });

  it("Form Validation Should fail when the content is too short.", () => {
    // Enter invalid content
    cy.get("[data-cy=content-input]").type("Hello");

    // Click the button
    cy.get("[data-cy=add-note-submit]").click();

    // Invalid content message should be displayed
    cy.contains("Please enter valid note content").should("exist");
    // cy.get("p#content-helper-text").should(
    //   "have.text",
    //   "Please enter valid note content"
    // );
  });

  it("Form Validation will succeed when inputs are valid.", () => {
    // Enter valid title and content
    cy.get("[data-cy=title-input]").type("Abcd1234");
    cy.get("[data-cy=content-input]").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, quam rhoncus ornare viverra"
    );

    // Click the button
    cy.get("[data-cy=add-note-submit]").click();

    // No Error message should be displayed.
    cy.get("p#title-helper-text").should("not.exist");
    cy.get("p#content-helper-text").should("not.exist");
  });

  it("Should display newly added notes.", () => {
    for (let i = 0; i < 4; i++) {
      // Enter the current title and content
      cy.get("[data-cy=title-input]").type(noteTitles[i]);
      cy.get("[data-cy=content-input]").type(noteContents[i]);

      // Click the 'Add Note' Button
      cy.get("[data-cy=add-note-submit]").click();
    }

    // Randomly check if one of the inputs exists.
    const index = Math.floor(Math.random() * 4);

    cy.get("h5").contains(noteTitles[index]).should("exist");
    cy.get("p").contains(noteContents[index]).should("exist");
  });

  it("Should remove a note when the delete process is followed.", () => {
    // Add Demo notes to the list
    for (let i = 0; i < 4; i++) {
      // Enter the current title and content
      cy.get("[data-cy=title-input]").type(noteTitles[i]);
      cy.get("[data-cy=content-input]").type(noteContents[i]);

      // Click the 'Add Note' Button
      cy.get("[data-cy=add-note-submit]").click();
    }

    // Randomly select a note to be deleted.
    const index = Math.floor(Math.random() * 4);
    cy.get("p")
      .contains(noteContents[index])
      .parent()
      .parent()
      .find("[data-cy=delete-button]")
      .click();

    cy.wait(500);
    // Click the confirm button
    cy.get("[data-cy=delete-confirm-button]")
      .should("have.text", "Yes")
      .click();

    cy.contains(noteTitles[index]).should("not.exist");
    cy.contains(noteContents[index]).should("not.exist");
  });
});
