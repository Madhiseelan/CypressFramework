/// <reference types="cypress" />

describe("Inspect Automation Test store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('[class="prdocutname"][title="Skinsheen Bronzer Stick"]').click()
      
    });


    it("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });


    it.only("3. Click on the first item using Index", () => {
        cy.visit("https://automationteststore.com/")
        //Find is the dependednt of the results of the first
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click()
    });

});