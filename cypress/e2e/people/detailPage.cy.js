/* eslint-disable no-undef */
describe("People List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/4");
  });

  it("access detail page directly and check title, and films count", () => {
    //check title
    cy.contains("h1", "Darth Vader");

    // check card length
    cy.get('[data-id="film-card"]').should("have.length", 4);
  });
});
