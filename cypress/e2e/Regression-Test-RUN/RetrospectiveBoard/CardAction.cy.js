import { ProductionURL } from "../../../../Helpers";
import { email_field } from "../../../../Helpers";
import { Password_field } from "../../../../Helpers";
import { Login_Button } from "../../../../Helpers";
import { SelectCompany,producAdmin,passwrdstag } from "../../../../Helpers";
describe('', () => {

    beforeEach(() => {
        cy.visit(ProductionURL)
        cy.get(email_field).type(producAdmin)
        cy.get(Password_field).type(passwrdstag)
        cy.get(Login_Button).click()
        cy.get(SelectCompany).click()

    //TO Select company/team in which you create board  
     cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
     cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

    //Open Board 
    cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid').click({force:true})
    })

    it.only('Move Card', () => {
       
        cy.get('[data-rbd-draggable-id="6433db2b387c1d8c7bb8de44"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .board-more-options-btn').click()
       
    //for edit card 
        
        cy.get('[data-rbd-draggable-id="6433db2b387c1d8c7bb8de44"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .export-ul > .d-contents > :nth-child(1)').click()
        
    //for Duplicate card
     
        cy.get('[data-rbd-draggable-id="6433db2b387c1d8c7bb8de44"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .board-more-options-btn').click()
        cy.get('[data-rbd-draggable-id="6433db2b387c1d8c7bb8de44"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .export-ul > .d-contents > :nth-child(2)').click()
      
    // Move Card
        
        
        //Select Board where you want to move card
       //
        //Select columns
       

        //Click on move button

        // Use an if else statement to check if the error message is displayed
        //cy.get(SuccessMsg).then($el => {
          //  if ($el.is(':visible')) {
            //    cy.get('.toast-text').should('contain.text' , 'Card moved successfully!')
              // If the   error message is visible, check if it contains the expected text
              
           // } else {
              // If the error message is not visible, the test fails
             // throw new Error('Error message is not displayed');
            //}
         // });
        'Card moved successfully!'
   
   
    });

    it('Duplicate card', () => {

          cy.get('[data-rbd-droppable-id="1"] > [data-rbd-draggable-context-id="0"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .board-more-options-btn > .fas').eq(1).click()

        //for Duplicate card
          cy.get('[data-rbd-droppable-id="1"] > [data-rbd-draggable-context-id="0"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .export-ul > .d-contents > :nth-child(2)').eq(1).click()
      
    });

    it('Switch Type', () => {
        
        cy.get('[data-rbd-droppable-id="1"] > [data-rbd-draggable-context-id="0"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .board-more-options-btn > .fas').eq(1).click()
        cy.get('[data-rbd-draggable-id="63f4b01904b6351b1b11e753"] > :nth-child(1) > .ticket > .ticket-options > :nth-child(3) > .board-more-options-dropdown > :nth-child(1) > .export-ul > .d-contents > :nth-child(4)').invoke('show').click({force:true})
        
    });
});