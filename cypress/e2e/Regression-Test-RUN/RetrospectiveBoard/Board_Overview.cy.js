import { BaseUrl } from "../../../Constant"

describe ("Admin User Actions Suite" , function()
{
     it.skip("Login Scenario" , function()
     {
          cy.snapshot(BaseUrl)
        cy.visit('https://reetro-io-staging.herokuapp.com/login')
        cy.get('[placeholder="Email"]').type('mahrukh.loxvo13@gmail.com')
        cy.get('[placeholder="Password"]').type('test1234')
        cy.get('.login-signup-button').click()
        cy.get(':nth-child(3) > .team-box-button').click()
        

        cy.get(':nth-child(2) > .mh-board-icon-container').click({force:true})
        cy.get('.board-tab > :nth-child(1)').click({force:true})
        cy.get('.overview-mgu').invoke('remove');

        cy.compareSnapshot('Board_Overview')


        
}
     )})