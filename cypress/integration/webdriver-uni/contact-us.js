/// <reference types="Cypress" />

describe("Test Contact Us from Via WebDriverUni", () => {

    it("Should be able to submit a successfull submission via Contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // cy.get('#contact-us').click({force:true})
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type("MadhiSeelan")  
        cy.get('[name="last_name"]').type("Ponnusamy")
        cy.get('[name="email"]').type("spmadhiponnusamy@gmmal.com")
        cy.get('textarea.feedback-input').type("Test Feedback description - Enter Anything")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successfull submission via Contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html") 
        cy.get('[name="first_name"]').type("Seelan")
        cy.get('[name="last_name"]').type("Ponnusamy")
      
        cy.get('textarea.feedback-input').type("Test is negtive Feedback description - Enter Anything")
        cy.get('[type="submit"]').click()

        cy.get('body').contains('Error: all fields are required')
        cy.get('body').contains('Error: Invalid email address')
    });


});