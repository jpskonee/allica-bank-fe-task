/* eslint-disable no-undef */
describe("People List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("checks the title, card length and props", () => {
    //check title
    cy.contains("h1", "Star Wars People");

    // check card length
    cy.get('[data-id="people-card"]').should("have.length", 10);

    // Check props in first card.
    cy.get('[data-id="people-card"]')
      .first()
      .within(() => {
        cy.get('[data-id="people-name"]').contains("h4", "Luke Skywalker");
        cy.get('[data-id="people-gender"]').contains("p", /male/i);
        cy.get('[data-id="people-planet"]').contains("p", "Tatooine");
      });
  });

  it("clicks on the first card and checks if new page URL is valid", () => {
    cy.get('[data-id="people-card"]').first().click();

    cy.url().should("include", "/1");
  });
});
