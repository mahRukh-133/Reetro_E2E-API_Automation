import { it } from "mocha";
import { BaseUrl } from "../../../Constant";
import { email_field,Password_field,Login_Button, SuccessMsg } from "../../../Elements";


/// <reference types = "Cypress-iframe"/>
describe('Add More Team', () => {

    beforeEach(() => {
          cy.visit(BaseUrl)
          cy.get(email_field).type('testing@gmail.com ')
          cy.get(Password_field).type('test1234')
          cy.get(Login_Button).click()
          cy.get('.sidebar-item ').eq(6).click({force:true})
    });

    it('Add more team in already paid company', () => {
         
    // Click on Choose Plan Edit button
          cy.get(':nth-child(1) > .row > .cell-1 > p').click()     
          
    // Add More Team
          cy.get(':nth-child(3) > .toggle-switch > .switch > .slider').click()  
          
    // Click on Confirm Plan Button
          cy.get('.buttons-cont > .button-primary').click()

    // Validate Confirmation popup
          cy.get(SuccessMsg).should('have.text', 'Subscription updated successfully!')

    });

}) 