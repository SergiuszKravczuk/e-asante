import React from "react";
import LeftMainSection from "./LeftMainSection";

describe("<LeftMainSection />", () => {
  it("Render when width is < 1220px", () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(320, 575);
    cy.mount(<LeftMainSection />);
    cy.get('[data-testid="header__leftSectionMobileMenu"]').should("exist");
    cy.get('[data-testid="header__leftSectionSearchIcon"]').should("exist");
    cy.get('[data-testid="header__leftSectionWishList"]').should(
      "have.css",
      "display",
      "none"
    );
  });
  it("Render when width is >= 990px", () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1220, 575);
    cy.mount(<LeftMainSection />);
    cy.get('[data-testid="header__leftSectionMobileMenu"]').should(
      "have.css",
      "display",
      "none"
    );
    cy.get('[data-testid="header__leftSectionSearchIcon"]').should("exist");
    cy.get('[data-testid="header__leftSectionWishList"]').should("exist");
  });
});
