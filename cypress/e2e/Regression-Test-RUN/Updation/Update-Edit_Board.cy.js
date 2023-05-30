import { ProductionURL } from "../../../../Helpers";
import { producAdmin} from "../../../../Helpers";
import { email_field,Password_field,Login_Button,SelectCompany } from "../../../../Helpers";

it('Delete Board',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).click().type(producAdmin)
    cy.get(Password_field).click().type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()



    cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
    cy.get('.share-btn').click();

    cy.get(':nth-child(12) > .img-desc > p').click();
    cy.get('[type="text"]').should('be.enabled');
    cy.get('.cf-textarea').should('be.enabled');
    cy.get(':nth-child(5) > .cf-text-field').should('be.enabled');
    cy.get(':nth-child(6) > .cf-text-field').should('be.enabled');
    cy.get(':nth-child(7) > .cf-text-field').should('be.enabled');
  
   // cy.get(':nth-child(11) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    //cy.get(':nth-child(12) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    //cy.get('.um2-dropdown > .switch-option > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    //cy.get('.vote-counter > input').should('be.visible');
    //cy.get('.vote-counter > input').should('be.enabled');
    cy.get('.create-board-btn').should('be.visible');
    cy.get('.create-board-btn').should('be.enabled');
    cy.get('.create-board-btn').click();
    cy.get('.toast-message').should('have.text', 'Success!×Board updated successfully!');
    cy.get('.toast-heading').click();
    cy.get('.toast-heading').should('be.visible');
})