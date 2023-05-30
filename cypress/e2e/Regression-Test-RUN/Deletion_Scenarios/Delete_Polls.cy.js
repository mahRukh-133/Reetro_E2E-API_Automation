import { ProductionURL } from "../../../../Helpers"
import { email_field } from "../../../../Helpers"
import { Password_field,Login_Button,SelectCompany } from "../../../../Helpers"
import { producAdmin } from "../../../../Helpers"


it('Delete Board',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type(producAdmin)
    cy.get(Password_field).click().type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()

    cy.get('.sidebar-item').eq(3).click({force:true})


    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .button-primary').click();
    cy.get(':nth-child(17) > .card-poll > :nth-child(1) > .board-more-options-dropdown > .fa-ellipsis-h').click();
    cy.get(':nth-child(17) > .card-poll > :nth-child(1) > .board-more-options-dropdown > .chc-export-ul-wrap > .export-ul > li > .fas').click();
    cy.get('.button-export').click();
    cy.get('.toast-text').should('be.visible');
    cy.get('.toast-text').should('have.class', 'toast-text');
   
})