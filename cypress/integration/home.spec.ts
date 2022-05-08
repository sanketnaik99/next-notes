describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Form Validation Should fail when no title and content are present", () => {
    // Click submit button without entering anything
    cy.get("#add-note-submit").click();

    // Both fields should show the error message
    cy.get("p#title-helper-text").should("have.text", "A title is required");
    cy.get("p#content-helper-text").should(
      "have.text",
      "Note content is required"
    );
  });

  it("Form Validation Should fail when the title is too short.", () => {
    // Enter invalid title
    cy.get("input#title").type("Ab");

    // Click the button
    cy.get("#add-note-submit").click();

    // Invalid title message should be displayed.
    cy.get("p#title-helper-text").should(
      "have.text",
      "Please enter a valid title"
    );
  });

  it("Form Validation Should fail when the content is too short.", () => {
    // Enter invalid content
    cy.get("textarea#content").type("Hello");

    // Click the button
    cy.get("#add-note-submit").click();

    // Invalid content message should be displayed
    cy.get("p#content-helper-text").should(
      "have.text",
      "Please enter valid note content"
    );
  });

  it("Form Validation will succeed when inputs are valid.", () => {
    // Enter valid title and content
    cy.get("input#title").type("Title");
    cy.get("textarea#content").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. {enter}Mauris lacinia, quam rhoncus ornare viverra"
    );

    // Click the button
    cy.get("#add-note-submit").click();

    // No Error message should be displayed.
    cy.get("p#title-helper-text").should("not.exist");
    cy.get("p#content-helper-text").should("not.exist");
  });
});
