import { BaseUrl } from "../../../Constant";
import { email_field, Login_Button, SuccessMsg } from "../../../Elements";
import { Password_field } from "../../../Elements";
import "cypress-iframe";
/// <reference types = "Cypress-iframe"/>
describe('Payment Actions', () => {

    beforeEach(() => {
        cy.visit(BaseUrl)
        cy.get(email_field).type('testing@gmail.com ')
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
       cy.get('.sidebar-item ').eq(6).click({force:true})
    });
  
  

    

        it('Edit Account Info', () => {
            cy.get(':nth-child(2) > .row > .col-xl-3 > p').click()

            cy.get('.modal-text-field').eq(0).click().clear().type("Test User")
            cy.get('.modal-text-field').eq(1).click().clear().type("Master") 
            //Add Email Address  
           // cy.get('.modal-text-field').eq(2).click().clear().type("testing@gmail.com")   
           // cy.get('.modal-text-field').eq(2).click().clear().type("Test User")  
            cy.get('.modal-text-field').eq(3).click().clear().type("Address")  
            cy.get('.modal-text-field').eq(4).click().clear().type("VAT NUMBER")
            cy.get('.modal-text-field').eq(6).click().clear().type("Test User")
            cy.get(':nth-child(2) > .modal-text-field').click().clear().type("m1m1m1")
            cy.get('.confirm-btn').click()
            
            //To Validate Info successfully updated
            cy.get('.toast-message.success').should('contain.text' , "Billing details updated successfully!").and("be.visible")

        });














})
