import { ProductionURL } from "../../../Constant"
import { Password_field, email_field } from "../../../Elements"

it.skip('delete user',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type('mahrukh.khalid@gmail.com')
    cy.get(Password_field).click().type('test1234')
    cy.get('.login-signup-button').click();

    cy.get('.user-dropdown-content', {timeout:6000}).invoke('show') 
   cy.get('.user-dropdown-content > :nth-child(1)',{timeout:6000}).click({force:true})

   //Click on Delete button
   cy.get('.button-primary-outline').click()
   cy.get('.button-export').click()

   
})