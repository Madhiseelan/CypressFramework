/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test store", () => {

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5) > a').click() //--- CSS Path
        cy.get('a[href$="contact"]').click()

        //a[contains(@href,'contact')] --- Xpath
        //cy.xpath('(//*[text()="Contact Us"])[2]').click()

        //In CSS $ symbol means, search for the ending text, ^ means for starting text

        cy.get('#ContactUsFrm_first_name').type("Seelan")
        cy.get('#ContactUsFrm_email').type("sponnusamy@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("This is test enquiry form and type anything additionally")
        cy.get('button[title="Submit"]').click()
        cy.log('Test case has executed')
    });

});