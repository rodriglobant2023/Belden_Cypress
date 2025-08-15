describe("Patents", () => {
  it("tests patents", () => {
    cy.viewport(1792, 521);
    cy.visit("https://redesign.belden.com/knowledge-hub/patents");
    cy.wait(1000)
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(1000)
    cy.get('.hero__title')
    .should('have.text', 'Patents')
    //cy.get('.hero__slide__content__info__buttons > .button').click()
    cy.get('.C3StatementContentReadMore__more').click()
    //assert
    cy.get('[data-toggle="expand"]').click()
    cy.get(':nth-child(1) > .AA1Acordion__content > .M4AccordionGroupTable__accordions__tableWrapper > [data-refselect="DCX and ECX Optical fiber distribution"] > .M4AccordionGroupTable__accordions__tableWrapper__table__title')
    .should('have.text', 'DCX and ECX Optical fiber distribution')
    cy.wait(1000)
    cy.get('.active > .AA1Acordion__content > .M4AccordionGroupTable__accordions__buttonWrapper > .button')
    .first().click()
    cy.get('.M4AccordionGroupTable__accordions__buttonWrapper > ol > :nth-child(1)')
    .should('be.visible')
    cy.wait(1000)
    cy.get('ol > :nth-child(1) > input').click()
    cy.get('.active > .AA1Acordion__content > .M4AccordionGroupTable__accordions__buttonWrapper > .button')
    .first().click()
    cy.get('[data-refselect="Belden | REVConnect®"] > .M4AccordionGroupTable__accordions__tableWrapper__table__title')
    .should('have.text', 'Belden | REVConnect®')
    cy.get('.cardIcon__container').click()
    //assert
    //cy.get("nav.header__top li:nth-of-type(1) span").click();
    //cy.location("href").should("eq", "https://www.belden.com/find-a-distributor");
  });
});
