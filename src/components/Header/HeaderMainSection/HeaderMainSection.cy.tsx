import React from "react";
import HeaderMainSection from "./HeaderMainSection";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("could not find react-redux context value")) {
    return false;
  }
  return true;
});

describe("<HeaderMainSection />", () => {
  it("Render", () => {
    cy.viewport(320, 575);
    cy.mount(<HeaderMainSection />);

    cy.get('[data-testid="loader"]').should("not.exist");

    cy.get('[data-testid="header__leftSection"]').should("exist");
    cy.get('[data-testid="header__searchMenu"]').should("exist");
  });
});
