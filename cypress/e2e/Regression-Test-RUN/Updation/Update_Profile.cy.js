import { ProductionURL } from "../../../../Helpers";
import { producAdmin} from "../../../../Helpers";
import { email_field,Password_field,Login_Button,SelectCompany } from "../../../../Helpers";
describe('', () => {
   
    it('Update User Name negative and positive scenario', () => {
      
            cy.visit("https://reetro-io-staging.herokuapp.com/")
            cy.get(email_field).type('mahrukh.loxvo13@gmail.com ')
            cy.get(Password_field).type('test1234')
            cy.get(Login_Button).click()
            cy.get(SelectCompany).click()
        
        // to show hide                                             
        cy.get('.user-dropdown-content').invoke('show')
        cy.wait(2000) 
        cy.get('.user-dropdown-content > :nth-child(1)').click({force:true})
        //getting user name element 
        cy.get('[placeholder="Full Name"]').click().clear()
        cy.get('.button-primary').eq(1).click()
        // varify Warning message display if user name field is blank.
        cy.get('.toast-message.warning').should('contain.text', 'Name is required').and('be.visible')
    
    
        // Valid User Name:
        cy.get('.user-dropdown-content').invoke('show')
        cy.wait(2000)
      
        cy.get('.user-dropdown-content > :nth-child(1)').click({force:true})
    
        cy.get('[placeholder="Full Name"]').click().clear().type('Super_Admin')
        cy.get('.button-primary').eq(1).click()
        //Verify Success message display if user updated User name 
        cy.get('.toast-message.success').should('contain.text', "Your account is updated successfully.").and("be.visible")
       
    });
    
    it('Email Field validation scenario', () => {
        cy.visit("https://reetro-io-staging.herokuapp.com/")
        cy.get(email_field).type('mahrukh.loxvo13@gmail.com ')
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
        cy.get(SelectCompany).click()
        cy.get('.user-dropdown-content').invoke('show')
        cy.wait(2000) 
        cy.get('.user-dropdown-content > :nth-child(1)').click({force:true})
       // empty email address
       cy.get('[placeholder="New Email"]').click().clear()
       cy.get('.button-primary').eq(1).click()
       // verify Warning message display if user email field is blank.
       cy.get('.toast-message.warning').should('contain.text', 'Please enter a valid email').and('be.visible')
    
       //invalid email address
       cy.get('.user-dropdown-content').invoke('show')
       cy.wait(2000) 
       cy.get('.user-dropdown-content > :nth-child(1)').click({force:true})
      // empty email address
      cy.get('[placeholder="New Email"]').click().clear().type('mahrukh.loxvo13@gmal.com')
      cy.get('.button-primary').eq(1).click()
      // varify Warning message display if user email field is blank.
      cy.get('.toast-message.warning').should('contain.text', 'Please enter a valid email').and('be.visible')
    
    
      });
    
    });