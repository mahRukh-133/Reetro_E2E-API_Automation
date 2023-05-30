import { ProductionURL } from "../../../../Helpers"
import { email_field } from "../../../../Helpers"
import { Password_field,Login_Button,SelectCompany } from "../../../../Helpers"
import { producAdmin } from "../../../../Helpers"

it('Delete Health check',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type(producAdmin)
    cy.get(Password_field).click().type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()

    cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();

    cy.get('.board-tab > :nth-child(3)').click();
    cy.get(':nth-child(8) > .hc-gen-box > .d-flex > :nth-child(1) > :nth-child(2) > .board-more-options-dropdown > div > .fas').click();
    cy.get(':nth-child(8) > .hc-gen-box > .d-flex > :nth-child(1) > :nth-child(2) > .board-more-options-dropdown > .chc-export-ul-wrap > .export-ul > li > .fas').click();
    cy.get('.button-export').click();
    cy.get('.toast-text').should('have.class', 'toast-text');
    cy.get('.toast-heading').should('be.visible');
  
})