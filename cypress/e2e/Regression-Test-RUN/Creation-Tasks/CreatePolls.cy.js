import { BaseUrl } from "../../../../Helpers"
import { email_field } from "../../../../Helpers"
import { Password_field } from "../../../../Helpers"
import { Login_Button } from "../../../../Helpers"
import { ProductionURL } from "../../../../Helpers"
import { producAdmin } from "../../../../Helpers"


describe('Polls', () => {
    beforeEach(() => {
        cy.visit(ProductionURL)
        cy.get(email_field).type(producAdmin)
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
        cy.get(':nth-child(3) > .team-box-button').click()
    })

    it('Create CUStom Polls', () => {
        cy.get('.sidebar-item').eq(3).click({force:true})
        cy.get('.button-primary').eq(0).click()

        //check that user redirected to poll page
        cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('have.text', 'Polls');
        cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('be.visible');
       

        // Click on Create own polls
        cy.get('.button-primary').eq(1).invoke('click')


        cy.get('.input-text').type('polls');
        cy.get(':nth-child(1) > .mood-status-v-sad').click().type('hello');
        cy.get(':nth-child(2) > .mood-status-v-sad').click().type('hi');
        cy.get(':nth-child(1) > .switch > .slider').click();
        cy.get('.switch-text-container > :nth-child(2) > .button-primary').click();
        cy.get('.toast-message').should('have.text', 'Success!×Poll created successfully!');
       
})

it('Create polls without filling option',()=>{
    cy.wait(2000)
    cy.get('.sidebar-item').eq(3).click({force:true})
    cy.get('.button-primary').eq(0).click()

    //check that user redirected to poll page
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('have.text', 'Polls');
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('be.visible');

    // Click on Create own polls
    cy.get('.button-primary').eq(1).invoke('click')


    cy.get('.input-text').type('polls')

    //Click on Create Button
    cy.get('.switch-text-container > :nth-child(2) > .button-primary').click();

    cy.get('.toast-text').should('have.text', 'Please enter at least two valid options.');
    cy.get('.toast-heading').should('be.visible');
    cy.get('.toast-text').should('have.text', 'Please enter at least two valid options.');
    cy.get('.toast-heading').should('be.visible');
})


it('Create Polls with only one option and Tilte',()=>{
    cy.wait(2000)
    cy.get('.sidebar-item').eq(3).click({force:true})
    cy.get('.button-primary').eq(0).click()

    //check that user redirected to poll page
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('have.text', 'Polls');
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('be.visible');

    // Click on Create own polls
    cy.get('.button-primary').eq(1).invoke('click')


    cy.get('.input-text').type('polls')
    
    //Add option no 1
    cy.get(':nth-child(1) > .mood-status-v-sad').click().type('hello');


    //Click on Create Button
    cy.get('.switch-text-container > :nth-child(2) > .button-primary').click();

    cy.get('.toast-text').should('have.text', 'Please enter at least two valid options.');
    cy.get('.toast-heading').should('be.visible');
    cy.get('.toast-text').should('have.text', 'Please enter at least two valid options.');
    cy.get('.toast-heading').should('be.visible');

})


it('Create Polls without Tilte',()=>{
    cy.wait(2000)
    cy.get('.sidebar-item').eq(3).click({force:true})
    cy.get('.button-primary').eq(0).click()

    //check that user redirected to poll page
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('have.text', 'Polls');
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('be.visible');

    // Click on Create own polls
    cy.get('.button-primary').eq(1).invoke('click')


    
    //Add option no 1
    cy.get(':nth-child(1) > .mood-status-v-sad').click().type('hello');
    //Add option no 2
    cy.get(':nth-child(2) > .mood-status-v-sad').click().type('hi');


    //Click on Create Button
    cy.get('.switch-text-container > :nth-child(2) > .button-primary').click();

    cy.get('.toast-text').should('have.text', 'Please enter a question.');
    cy.get('.toast-heading').should('be.visible');
 

})


it.only('Create Polls without Tilte',()=>{
    cy.wait(2000)
    cy.get('.sidebar-item').eq(3).click({force:true})
    cy.get('.button-primary').eq(0).click()

    //check that user redirected to poll page
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('have.text', 'Polls');
    cy.get('[href="/team-health/64071ffdaba228540fb4207a/64071ffdaba228540fb4208a/polls"] > .tablinks').should('be.visible');

    // Click on Create own polls
    cy.get('.button-primary').eq(1).invoke('click')

    //Click on Cancel button and verify that user redirect to polls template page
    cy.get(':nth-child(2) > .button-primary-outline').click()

    cy.url().should('include','/polls')

})



})//ending describe