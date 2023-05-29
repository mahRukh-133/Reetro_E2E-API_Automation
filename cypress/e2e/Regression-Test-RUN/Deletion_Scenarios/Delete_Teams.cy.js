import { producAdmin } from "../../../Accounts"
import { ProductionURL } from "../../../Constant"
import { Login_Button, Password_field, SelectCompany, email_field } from "../../../Elements"

it('Delete Board',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type(producAdmin)
    cy.get(Password_field).click().type('test1234')
    cy.get(Login_Button).click()
    cy.get(':nth-child(4) > .team-box-button').click()

    cy.get('.sidebar-item').eq(2).click({force:true})
    cy.get(':nth-child(1) > :nth-child(2) > .fa-trash-alt').click();
    cy.get('.button-export').click();
    cy.get('.toast-message').should('be.visible');
    cy.get('.toast-heading').should('have.text', 'Success!×');
    
})