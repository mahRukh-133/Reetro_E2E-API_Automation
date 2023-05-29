import { describe } from "mocha";

describe('',()=>{


it('Merge Board', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.reetro.app/');
    cy.get('[placeholder="Email"]').type('mahrukh.loxvo13+jack@gmail.com');
    cy.get('[placeholder="Password"]').type('test1234');
    cy.get('.login-signup-button').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .team-box-button').click();
    cy.get(':nth-child(3) > .fa-ellipsis-h').click();
    cy.get('.board-icon-options > :nth-child(1)').click();
    cy.get('.cf-textarea').click();
    cy.get(':nth-child(11) > .cf-switch > .toggle-switch > .switch > .slider').click();
    cy.get(':nth-child(11) > .cf-switch > .toggle-switch > .switch > input').check();
    cy.get(':nth-child(10) > .cf-switch > .toggle-switch > .switch > .slider').click();
    cy.get(':nth-child(10) > .cf-switch > .toggle-switch > .switch > input').check();
    cy.get('.create-board-btn').click();
    cy.get('.toast-text').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .team-box-button').click();
    cy.get(':nth-child(3) > .fa-ellipsis-h').click();
    cy.get('.board-icon-options > :nth-child(1)').click();
    cy.get('.cf-textarea').click();
    cy.get(':nth-child(11) > .cf-switch > .toggle-switch > .switch > .slider').click();
    cy.get(':nth-child(11) > .cf-switch > .toggle-switch > .switch > input').check();
    cy.get(':nth-child(10) > .cf-switch > .toggle-switch > .switch > .slider').click();
    cy.get(':nth-child(10) > .cf-switch > .toggle-switch > .switch > input').check();
    cy.get('.create-board-btn').click();
    cy.get('.toast-text').click();
    /* ==== End Cypress Studio ==== */
})
})

