describe("home", () => {
  it("tests home", () => {
    cy.viewport(1792, 521);
    cy.visit("https://www.belden.com/");
    cy.get("nav.header__top li:nth-of-type(1) span").click();
    cy.location("href").should("eq", "https://www.belden.com/find-a-distributor");
  });
});
