import { producAdmin } from "../../../../Helpers";
import { ProductionURL } from "../../../../Helpers";
import { email_field } from "../../../../Helpers";
import { Password_field } from "../../../../Helpers";
import { Login_Button } from "../../../../Helpers";


//Super admin can create Health Check

describe('Health_Check', () => {
    beforeEach(() => {
        
        cy.visit(ProductionURL)
        cy.get(email_field).click().type(producAdmin)
        cy.get(Password_field).click().type('test1234')
        cy.get(Login_Button).click({force:true})
        cy.get(':nth-child(3) > .team-box-button').click()
    });

    it('Create Custom Health Check', function() {
        cy.get(':nth-child(3) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
        cy.get('.board-tab > :nth-child(3)').click();
        cy.get('.add-option').click();

        //verify that user redirect to custom-health check page
        cy.url().should('include','/health-check-custom')

        cy.get(':nth-child(1) > .healthcheck-card-empty > .healthcheck-card-empty-field').click().type('Test1')
        cy.get(':nth-child(1) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
        cy.get(':nth-child(2) > .healthcheck-card-empty > .healthcheck-card-empty-field').click().type('Test2')
        cy.get(':nth-child(2) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('dummy text')
        cy.get(':nth-child(3) > .healthcheck-card-empty > .healthcheck-card-empty-field').click().type('Test3')
        cy.get(':nth-child(3) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('dummmy text dummy text dummy text dummy text')
        cy.get('.button-primary').click()
        cy.get('.toast-message').should('have.class', 'toast-message');
        cy.get('.toast-text').should('have.text','Custom health check created successfully!')

    });

    it('Check that if user only fill one option then there should be error appeared',()=>{
        cy.get(':nth-child(3) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
        cy.get('.board-tab > :nth-child(3)').click();
        cy.get('.add-option').click();
       
        //verify that user redirect to custom-health check page
        cy.url().should('include','/health-check-custom')
        //Add only one option
        cy.get(':nth-child(1) > .healthcheck-card-empty > .healthcheck-card-empty-field').click().type('Test1')

        //Click on Create Button
        cy.get('.button-primary').click()

        //Validate that erro message should appear.
        cy.get('.toast-heading').should('be.visible');
      
    })

    it('Check that if user fill two option then there should be error appeared',()=>{
        cy.get(':nth-child(3) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
        cy.get('.board-tab > :nth-child(3)').click();
        cy.get('.add-option').click();

        //verify that user redirect to custom-health check page
        cy.url().should('include','/health-check-custom')

        //Add  option
        cy.get(':nth-child(1) > .healthcheck-card-empty > .healthcheck-card-empty-field').click().type('Test1')
        cy.get(':nth-child(1) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
        cy.get(':nth-child(2) > .healthcheck-card-empty > .healthcheck-card-empty-field').click().type('Test2')
        cy.get(':nth-child(2) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('dummy text')
       

        //Click on Create Button
        cy.get('.button-primary').click()

        //Validate that erro message should appear.
        cy.get('.toast-heading').should('be.visible');
      
    })

    it('Create Custom Health Check without entering title of option', function() {
        cy.get(':nth-child(3) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
        cy.get('.board-tab > :nth-child(3)').click();
        cy.get('.add-option').click();

        //verify that user redirect to custom-health check page
        cy.url().should('include','/health-check-custom')

        cy.get(':nth-child(1) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
        cy.get(':nth-child(2) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('dummy text')
        cy.get(':nth-child(3) > .healthcheck-card-empty > .healthcheck-card-empty-textarea').click().type('dummmy text dummy text dummy text dummy text')
        cy.get('.button-primary').click()
        
        //an error appeared 
        cy.get('.toast-message').should('have.class', 'toast-message');

    });

    it('check that add option is clickable ',()=>{
        cy.get(':nth-child(3) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
        cy.get('.board-tab > :nth-child(3)').click();
        cy.get('.add-option').click();

        //verify that user redirect to custom-health check page
        cy.url().should('include','/health-check-custom')

        //Check that button is clickable or not
       
        cy.get('.create-new-healthcard-temp').should('be.visible')
    })

    it('check that cancel button is clicable and user redirect to health check page ',()=>{
        cy.get(':nth-child(3) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
        cy.get('.board-tab > :nth-child(3)').click();
        cy.get('.add-option').click();

        //verify that user redirect to custom-health check page
        cy.url().should('include','/health-check-custom')

        //Check that button is clickable or not
        cy.get('.button-primary-outline').click()
        
        //verify that user redirect to health check page
        cy.url().should('include','/health-check')
    })

    


    
})