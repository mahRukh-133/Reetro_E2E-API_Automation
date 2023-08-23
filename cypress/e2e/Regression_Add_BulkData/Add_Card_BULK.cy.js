import { DevEnvURL } from "../../../Environments"
import { Password_field, email_field } from "../../../Helpers"

describe(" Add bulk comment card",()=>{

    it("Add Bulk comment cards",()=>{
           
            cy.visit(DevEnvURL)
            cy.get(email_field).click().type('testflow832+1@gmail.com')
            cy.get(Password_field).click().type('test1234')
            cy.get('.login-signup-button').click()
            cy.get(':nth-child(4) > .team-box-button').click()
            cy.get('div.mh-board-icon-grid').each($div => {
                // Within each div, find the img element
                click({force:true}); // Perform further actions/assertions on the img element
              });
            //cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid').click()

            // Add comment
            cy.get('.ticket-comment').eq(0).click({force:true})
            cy.get(".ticket-insert-text").first().type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting{enter}")
    })
})