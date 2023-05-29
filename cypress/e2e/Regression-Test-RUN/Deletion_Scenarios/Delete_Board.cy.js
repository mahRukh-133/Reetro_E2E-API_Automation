import { producAdmin } from "../../../Accounts"
import { ProductionURL } from "../../../Constant"
import { Login_Button, Password_field, SelectCompany, email_field } from "../../../Elements"

it('Delete Board',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type(producAdmin)
    cy.get(Password_field).click().type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()

    cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
    cy.get('.share-btn').click();
    cy.get(':nth-child(16) > .img-desc').click();
    cy.get('.button-export').click();
    cy.get('.toast-heading').should('be.visible');
    cy.get('.toast-text').should('have.class', 'toast-text');
 
})