import { ProductionURL, email_field } from "../../../../Helpers";
import { producAdmin } from "../../../../Helpers";
import { Login_Button } from "../../../../Helpers";
import { Password_field } from "../../../../Helpers";
import { SelectCompany } from "../../../../Helpers";


describe('Actions on Board', () => {

    beforeEach(() => {
       
        cy.visit(ProductionURL)
        cy.get(email_field).type(producAdmin)
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
        cy.get(SelectCompany).click()

    //TO Select company/team in which you create board 
        cy.wait(2000) 
        cy.get('.flex > :nth-child(1)',{timeout:3000}).should('be.visible').click()
        cy.get('#react-select-2-option-0',{timeout:3000}).click({force:true})

    //Open Board 
        cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid').click({force:true})

    });

    it('Create/Add Comment Card', () => {

    // Add comment (Create Comment)
        cy.get('.ticket-comment').eq(0).click({force:true})
        cy.get(".ticket-insert-text").first().type("Keep using the new user story template{enter}")

    //To validate text/comment added successfully
    //cy.get('.mb-3').should('have.text', 'Keep using the new user story template').and('be.visible')

    })

    it("Create Action Items" , () =>{

    //Add Action Items
        cy.get('[data-rbd-droppable-id="0"] > :nth-child(2) > .ticket-options > .ticket-options-cont > .ticket-action-item > .icon-ticket-touch-app').click()
        cy.get(".ticket-action-item").first().click()
        cy.wait(2000)
        cy.get(".ticket-user-pic.sb-avatar__image").eq(1).click({force:true})
        cy.get(".to-me").click()
        cy.get(".input-enter-comment").first().type("test{enter}")

    })

    it("Create Kudos", ()=>{
        //Add Kudos
        cy.get('[data-rbd-droppable-id="0"] > :nth-child(2) > .ticket-options > .ticket-options-cont > .ticket-ai-party > .icon-action-item-party').click()
        cy.get(".ticket-ai-party",{timeout:3000}).eq(0).click()
        // cy.wait(2000)
        cy.get('.ticket-text > .d-flex > :nth-child(1) > .sb-avatar > .ticket-user-pic').click()
        cy.get(".input").click().type("norman").wait(2000)
        cy.get('.p-email').click()
        cy.wait(3000)

        cy.get('.input-enter-comment').eq(0).type('hh{enter}')

    })

    it("Add GIF", ()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-rbd-droppable-id="0"] > :nth-child(2) > .ticket-options > .ticket-options-cont > .ticket-gif > .icon-action-item-gif').click();
        cy.get('.input-enter-comment').clear('a');
        cy.get('.input-enter-comment').type('add{enter}');
        /* ==== End Cypress Studio ==== */
    })

    it('Create Canvas', ()=>{

        cy.get('[data-rbd-droppable-id="0"] > :nth-child(2) > .ticket-options > .ticket-options-cont > .fa-palette').click();
        cy.get('.container > div > :nth-child(4)').click();
        cy.get('.button-primary').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.toast-heading').click();
        cy.get('.toast-heading').should('be.visible');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.toast-heading').click();
        cy.get('.toast-heading').should('have.text', 'Success!×');
        /* ==== End Cypress Studio ==== */


    })

    it('Create Custom Polls CArd ',()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-rbd-droppable-id="0"] > :nth-child(2) > .ticket-options > .ticket-options-cont > .fa-poll').click();
        cy.get('.button-primary').eq(0).invoke('show').click({force:true})

        cy.get('.input-text').clear('h');
        cy.get('.input-text').type('helo');
        cy.get(':nth-child(1) > .mood-status-v-sad').click().type("Option 1");
        cy.get(':nth-child(2) > .mood-status-v-sad').click().type("Option 2");
        cy.get(':nth-child(1) > .switch > .slider').click();
        //cy.get(':nth-child(1) > .switch > input').click();
        cy.get('.button-primary').click();
        cy.get('.toast-message.success').then($el => {
            if ($el.is(':visible')) {
                cy.get('.toast-text').should('contain.text' , 'Poll created successfully!')
              // If the   error message is visible, check if it contains the expected text
              
            } else {
              // If the error message is not visible, the test fails
              throw new Error('Error message is not displayed');
            }
          });
    })
  
});
