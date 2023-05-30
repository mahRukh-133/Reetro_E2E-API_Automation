import { ProductionURL } from "../../../../Helpers";
import { producAdmin} from "../../../../Helpers";
import { email_field,Password_field,Login_Button } from "../../../../Helpers";
it('Delete Board',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type(producAdmin)
    cy.get(Password_field).click().type('test1234')
    cy.get(Login_Button).click()
    cy.get(':nth-child(4) > .team-box-button').click()

    cy.get('.sidebar-item').eq(2).click({force:true})


    cy.get(':nth-child(1) > :nth-child(2) > .fa-pen').click();
    cy.get('.text-field').clear();
    cy.get('.text-field').type('Walter team');
    cy.get('.button-export').click();
    cy.get('.toast-text').should('be.visible');
    cy.get('.toast-text').should('have.text', 'Team updated successfully');
})