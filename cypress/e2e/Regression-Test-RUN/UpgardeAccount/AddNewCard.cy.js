/// <reference types = "Cypress-iframe"/>

import { BaseUrl } from "../../../Constant"
import { email_field,Password_field, Login_Button, ToastMsg, SuccessMsg } from "../../../Elements"

describe('Payment', () => {

    beforeEach(() => {
        cy.visit(BaseUrl)
        cy.get(email_field).type('xeuwattobaze-7032@yopmail.com')        
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
        cy.get('.sidebar-item ').eq(6).click({force:true})
    });

    it('Add New Card Negative scenario', () =>{

    //Add Card or Billing
        cy.get('.button-primary').invoke('click')   
        
    // Click on Confirm Plan Button Before select the Team to verify error appears 
        cy.get('.buttons-cont > .button-primary').click()   
    
    // Validate Error Message
        cy.get('.toast-text').should('have.text', 'Please select at least one Team')    

    })//ending it block


    it('Add New Card', () =>{

    //Add Card or Billing
        cy.get('.button-primary').invoke('click')   
        
    // Select Team for which we upgrade the plan
        cy.get(':nth-child(2) > .toggle-switch > .switch > .slider').click()   
     
    // Validate Monthly plan payment should be 18$
        cy.get('.profile-tab > :nth-child(1)').click()
        //cy.get('.pp-details').eq(0).should('have.text', '$18 / Month TOTAL PRICE')
    //Click on confirm plan button
        cy.get('.buttons-cont > .button-primary').click()  
        
    // Add Billing Details
    //Add Card Number    
        cy.frameLoaded('.__PrivateStripeElement > iframe').eq(0)
        cy.iframe(".__PrivateStripeElement > iframe").find('.InputElement.is-empty.Input.Input--empty')
        .eq(0).should('be.visible').click().type("4242424242424242 ,11,23 ,1331")

    //Add Card Holder Name
        cy.get('.scheduler-text-field').eq(0).click().type("Test User")

    //Enter Company Name
        cy.get('.scheduler-text-field').eq(1).click().type("Visa")

    //Enter Billing Address
        cy.get('.scheduler-text-field').eq(3).click().type("Lahore")

    //Enter City Name
        cy.get('.scheduler-text-field').eq(4).click().type("LHR")

    //Enter Postal Code
        cy.get('.scheduler-text-field').eq(5).click().type("MIMN1N")

    //ENter VAT Number
        cy.get('.scheduler-text-field').eq(7).click().type("34738")
 
    // Click on confirm plan
        //cy.get(':nth-child(2) > .button-primary').click()
     
    // Validate the success message
        //cy.get(SuccessMsg).should('have.text', 'Subscription updated successfully!')
        
    })//ending it block










})//ending describe block