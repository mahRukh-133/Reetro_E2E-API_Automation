import { BaseUrl } from "../../../Constant";
import { email_field,Password_field,Login_Button,SuccessMsg } from "../../../Elements";
describe('Payment Actions', () => {

    beforeEach(() => {
        cy.visit(BaseUrl)
        cy.get(email_field).type('testing@gmail.com ')
        cy.get(Password_field).type('test1234')
        cy.get(Login_Button).click()
       cy.get('.sidebar-item ').eq(6).click({force:true})
    });
  
    it('Edit Credit Card', () => {
              
        cy.get(':nth-child(3) > .row > .col-xl-3 > p').click()
        cy.wait(3000)
        cy.frameLoaded('.__PrivateStripeElement > iframe').eq(0)
        cy.iframe(".__PrivateStripeElement > iframe").find('.InputElement.is-empty.Input.Input--empty')
        .eq(0).should('be.visible').click().type("4242424242424242 ,11,23 ,1331")
        cy.get('.confirm-btn').click()
        cy.wait(2000)
        cy.get(SuccessMsg).should('contain.text' , "Card updated successfully!")
    
    });
})