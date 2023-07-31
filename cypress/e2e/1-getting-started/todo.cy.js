/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("should display the 'Seazons Wear' title", () => {
    cy.contains("Seazons Wear").should("be.visible");
  });

  it("should allow users to fill and submit the contact form", () => {
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#message").type("This is a test message");
    cy.get('input[type="submit"]').click();

    // You can add assertions here to check if the form submission was successful
  });
  it("should display the background image in the 'Contact' section", () => {
    cy.get(".section-middle-image").should("be.visible");
  });
  it("should display the slideshow", () => {
    cy.get(".slideshow").should("be.visible");
  });
});
