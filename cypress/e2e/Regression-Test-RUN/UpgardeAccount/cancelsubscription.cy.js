import { it } from "mocha";
import { BaseUrl } from "../../../Constant";
import { email_field,Password_field,Login_Button, SuccessMsg } from "../../../Elements";


/// <reference types = "Cypress-iframe"/>
describe('Cancel Subscription', () => {

    beforeEach(() => {
          cy.visit(BaseUrl)
          cy.get(email_field).type('testing@gmail.com ')
          cy.get(Password_field).type('test1234')
          cy.get(Login_Button).click()
          cy.get('.sidebar-item ').eq(6).click({force:true})
    });

    it('Cancel Subscription ', () => {

    // Click on Cancel Subscription button 
          cy.get('.button-primary').click()
 
    // Select the reason for cancel subscription
          cy.get(':nth-child(2) > .toggle-switch > .switch > .round').click()    
               
    // Add reason in input box
          cy.get('.MN-textarea').click().type("This dummy text")     

    //Click on cancel subscription buttton
          cy.get('.subscription-cancel-modal-content > .button-primary').click()

    // validate success message should appear
          cy.get(SuccessMsg).should('have.text', '')
    })
})