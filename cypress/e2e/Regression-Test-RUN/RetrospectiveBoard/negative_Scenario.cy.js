import { BaseUrl, ProductionURL } from "../../../Constant";
import { email_field, SuccessMsg } from "../../../Elements";
import { Password_field } from "../../../Elements";
import { Login_Button } from "../../../Elements";
import { SelectCompany } from "../../../Elements";
import { passwrdstag, stagingEmail } from "../../../Accounts";
import { ProductionEmail } from "../../../Accounts";
describe('Actions on Board', () => {

    beforeEach(() => {
        cy.visit(ProductionURL)
        cy.get(email_field).type(ProductionEmail)
        cy.get(Password_field).type(passwrdstag)
        cy.get(Login_Button).click()
        cy.get(SelectCompany).click()

    //TO Select company/team in which you create board  
     cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
     cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

    //Open Board 
    cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid').click({force:true})

    //Open Polls popup
    cy.get('.fas.fa-poll.poll').eq(0).click()
    cy.get('.button-primary').eq(0).invoke('show').click({force:true})
    cy.get('.button-primary').click()
 
    })


    it('when All fields are empty ', () => {
        
    // Use an if else statement to check if the error message is displayed
        cy.get(SuccessMsg).then($el => {
        if ($el.is(':visible')) {
            cy.get('.toast-text').should('contain.text' , 'Please enter a question')
          // If the   error message is visible, check if it contains the expected text
          
        } else {
          // If the error message is not visible, the test fails
          throw new Error('Error message is not displayed');
        }
      });
    
    });

    it('To check If Title field is filled and Option fields are empty then error shown or not', () => {
        
        //Add Polls Title
        cy.get('.input-text').click().type("Title of Polls")

        //Click on Create Button
        cy.get('.button-primary').click()

        //To check error display or not
        cy.get(ToastMsg).then($el => {
            if ($el.is(':visible')) {
                cy.get('.toast-text').should('contain.text' , 'Please enter at least two valid options.')
              // If the   error message is visible, check if it contains the expected text
              
            } else {
              // If the error message is not visible, the test fails
              throw new Error('Error message is not displayed');
            }
        });
    });

    it('If User enter only one option with Title', () => {
     
        //Add Polls Title
        cy.get('.input-text').click().type("Title of Polls")

        // Add Option 1
        cy.get(':nth-child(1) > .mood-status-v-sad').click().type("Option 1")

        //Click on Create Button
        cy.get('.button-primary').click()

       //To check error display or not
        cy.get(ToastMsg).then($el => {
           if ($el.is(':visible')) {
             cy.get('.toast-text').should('contain.text' , 'Please enter at least two valid options.')
             // If the   error message is visible, check if it contains the expected text
       
           } else {
             // If the error message is not visible, the test fails
           throw new Error('Error message is not displayed');
    }
});
    
});


     it.only('If USer select extra option and left blank it ', () => {
     
        
            //Add Polls Title
            cy.get('.input-text').click().type("Title of Polls")

            // Add Option 1
            cy.get(':nth-child(1) > .mood-status-v-sad').click().type("Option 1")

            //Add Option 2
            cy.get(':nth-child(2) > .mood-status-v-sad').click().type("Option 1")
            
            //Add Third option and left blank it 
            cy.get('.add-mood-card-btn').click()

            //Click on Create Button
            cy.get('.button-primary').click()

            
           //To check error display or not
          /* cy.get(ToastMsg).then($el => {
              if ($el.is(':visible')) {
                  cy.get('.toast-text').should('contain.text' , 'Please enter all options.')
                  // If the   error message is visible, check if it contains the expected text
        
               } else {
                  // If the error message is not visible, the test fails
                  throw new Error('Error message is not displayed');
     }
 });*/
 

});





    
})