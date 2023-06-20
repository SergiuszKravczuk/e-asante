import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);

    cy.get('[data-testid="topBar"]').should("exist");
    cy.get('[data-testid="headerMain"]').should("exist");
  });
});
