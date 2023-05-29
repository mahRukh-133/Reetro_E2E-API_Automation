import { ProductionEmail, producAdmin } from "../../../Accounts";
import { BaseUrl, ProductionURL } from "../../../Constant";
import { email_field } from "../../../Elements";
import { Password_field } from "../../../Elements";
import { Login_Button } from "../../../Elements";
import { SelectCompany } from "../../../Elements";

describe('Actions on Board', () => {

    beforeEach(() => {
       
        cy.visit(ProductionURL)
        cy.get(email_field).type(producAdmin)
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
        cy.get(SelectCompany).click()

    //TO Select company/team in which you create board 
    cy.wait(2000) 
     cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
     cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

    //Open Board 
    cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid').click({force:true})

    });

    it('Add Action Item', () => {

     // Add comment
     cy.get('.ticket-comment').eq(0).click({force:true})
     cy.get(".ticket-insert-text").first().type("gdd{enter}")
   
     //Add Action Items
     cy.get('[data-rbd-droppable-id="0"] > :nth-child(2) > .ticket-options > .ticket-options-cont > .ticket-action-item > .icon-ticket-touch-app').click()
     cy.get(".ticket-action-item").first().click()
     cy.wait(2000)
     cy.get(".ticket-user-pic.sb-avatar__image").eq(1).click({force:true})
     cy.get(".to-me").click()
     cy.get(".input-enter-comment").first().type("test{enter}")
   
      //Add Kudos
      cy.get(".ticket-ai-party").eq(0).click()
      cy.wait(2000)
      cy.get('.ticket-text > .d-flex > :nth-child(1) > .sb-avatar > .ticket-user-pic').click()
     // cy.get(".ticket-user-pic .sb-avatar__image").eq(1).click()
      cy.get(".input").click().type("T_member1").wait(2000)
      cy.get('.p-email').click()
      cy.wait(3000)
      
      cy.get('.input-enter-comment').eq(0).type('hh{enter}')

    });

    it('Add Polls Card', () => {
      
      cy.get('.fas.fa-poll.poll').eq(0).click()
      cy.get('.button-primary').eq(0).invoke('show').click({force:true})

      //Create New Polls ---> Add Title of new polls
      cy.get('.input-text').click().type("Title of Polls")

      //Add Options
      cy.get(':nth-child(1) > .mood-status-v-sad').click().type("Option 1")
      cy.get(':nth-child(2) > .mood-status-v-sad').click().type("Option 2")

      // Click on Create Button
      cy.get('.button-primary').click()

         // Use an if else statement to check if the success message is displayed
         cy.get('.toast-message.success').then($el => {
          if ($el.is(':visible')) {
              cy.get('.toast-text').should('contain.text' , 'Poll created successfully!')
            // If the   error message is visible, check if it contains the expected text
            
          } else {
            // If the error message is not visible, the test fails
            throw new Error('Error message is not displayed');
          }
        });
    });


});