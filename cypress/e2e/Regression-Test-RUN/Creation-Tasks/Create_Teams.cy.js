import { ProductionURL } from '../../../../Helpers';
import { email_field } from '../../../../Helpers';
import { Password_field } from '../../../../Helpers';
import { Login_Button } from '../../../../Helpers';
import { producAdmin } from '../../../../Helpers';
import Chance from 'chance';




//Super admin can create Health Check

describe('Create Team', () => {
    beforeEach(() => {
        
        cy.visit(ProductionURL)
        cy.get(email_field).type(producAdmin)
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
        cy.get(':nth-child(4) > .team-box-button').click()
    });

    it('Create Team', function() {

    // Create a new Chance instance
        const chance = new Chance();

    // Generate a random team name using the adjective-noun pattern
    const teamname = chance.first();

    // Use the random team name in your test
        cy.get('.sidebar-item').eq(2).click({force:true})
        cy.get('.button-primary').click();

        //validate and verify that Create Team popup opens
        cy.get('.cn-team-popup').should('have.text', 'Create New TeamSelect Team AdminCancelSave');
        cy.get('.clone-board-h1').should('be.visible');
  
        cy.get('.text-field').clear('t');
        cy.get('.text-field').type(teamname);
        cy.get('.select-dd > .container > .reetro-select-container > .reetro-select__control > .reetro-select__value-container > .reetro-select__single-value').click();
        cy.get('#react-select-5-option-1').click();
        cy.get('.button-export').click();

    //verify that team created successfully
        cy.get('.toast-heading').should('have.class', 'toast-heading');
        cy.get('.toast-heading').should('be.visible');
       
        
    })

    it('if user left empty the team title and create team then an error appears',()=>{
        cy.get('.sidebar-item').eq(2).click({force:true})
        cy.get('.button-primary').click();

        //validate and verify that Create Team popup opens
        cy.get('.cn-team-popup').should('have.text', 'Create New TeamSelect Team AdminCancelSave');
        cy.get('.clone-board-h1').should('be.visible');
  
        cy.get('.select-dd > .container > .reetro-select-container > .reetro-select__control > .reetro-select__value-container > .reetro-select__single-value').click();
        cy.get('#react-select-5-option-3').click();
        cy.get('.button-export').click();

        //validate error message
        cy.get('.toast-heading').should('be.visible');
        cy.get('.toast-heading').should('have.text', 'Error!×');
    })

    it('if user does not select admin user and create team then an error appears',()=>{
        cy.get('.sidebar-item').eq(2).click({force:true})
        cy.get('.button-primary').click();

        //validate and verify that Create Team popup opens
        cy.get('.cn-team-popup').should('have.text', 'Create New TeamSelect Team AdminCancelSave');
        cy.get('.clone-board-h1').should('be.visible');


        cy.get('.text-field').type('testTeam');
        cy.get('.button-export').click();

        cy.get('.toast-heading').click();
        cy.get('.toast-heading').should('be.visible');
        cy.get('.toast-text').should('have.text', 'Please select your team admin');
     
    })
})