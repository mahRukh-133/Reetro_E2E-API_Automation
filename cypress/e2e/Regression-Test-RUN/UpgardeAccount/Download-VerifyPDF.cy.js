import { BaseUrl } from "../../../Constant"
import { email_field,Password_field,Login_Button } from "../../../Elements"
/// <reference types = "Cypress-iframe"/>
describe('Payment Actions', () => {

  it('Download PDF' ,()=>{
    
    cy.visit(BaseUrl)
    cy.get(email_field).type('testing@gmail.com ')
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get('.sidebar-item ').eq(6).click({force:true})

// Download PDF
cy.get(':nth-child(1) > .icon').click()

})
    
it('Verify Downloaded File', ( )=>{

    cy.readFile('cypress/downloads/Invoice-13A401DF-4079.pdf')//.should("contain.text" ,"Invoice")
  
}) 
  
})