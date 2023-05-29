import { GuestURLProduc } from "../../../Constant";
import { guest_emailF,GuestSignBtn, } from "../../../Elements";
import { BoardSetting } from "../../../Elements";
describe('Guest User  Negative Scenario', () => {

    //Add hook
    beforeEach(() => {
        cy.visit(GuestURLProduc)
        cy.get(guest_emailF).click().type('GuestUser')
        cy.get('.checkmark').click({force:true})
        cy.get(GuestSignBtn).click()
        cy.get(BoardSetting).click()


    });
    it('Perform Action on Board', () => {
    //Check guest User can start the timer of board
    cy.log('Guest USer has not access to start timer')
    cy.get('.timer',{timeout:3000}).click()

    cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
   
     //Check guest user can start voting
     cy.get(BoardSetting).click({force:true})
     cy.wait(2000)
     cy.get('.reetro-controls-body > :nth-child(2)',{timeout:3000}).click({force:true})
     cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
     cy.log("Guest User have not access to perform this action")

      //Check that guest user can sahre/export board
        cy.get(BoardSetting).click()
        cy.get('.reetro-controls-body > :nth-child(3)',{timeout:3000}).click()
        
        cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
       
        //Check that Guest user can reset all votes:
        cy.log("To Check Guest USer can reset all votes")
        cy.get(BoardSetting).click()
        cy.wait(2000)
        cy.get('.reetro-option.pos-rel').click({froce:true}) 
        cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
        
        //Check that Guest USer can enable dot voting
        cy.log("guest user can not enable dot voting")
        cy.wait(2000)
        cy.get(BoardSetting).click({force:true})
        cy.get('.switch-option.pos-rel>.toggle-switch>.switch>.round').click({force:true})
        cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
  
         //Check That Guest user can disable GIF
         cy.log("guest user can disable GIF")
         cy.get(BoardSetting).click({force:true})
         cy.get('.disable-gifs.pos-rel > .toggle-switch > .switch > .round').click({force:true})
         cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
   
          //Check That guest user can lock boardd
        cy.log("check guest user can lock the board")
        cy.get(BoardSetting).click({force:true})
        cy.get(':nth-child(8) > .toggle-switch > .switch > .round').click({force:true})
  
        cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
 
         //Check that Guest user can mask the comment
         cy.log("check guest user can mask  the comment")
         cy.get(BoardSetting).click({force:true})
         cy.wait(2000)
         cy.get(':nth-child(9) > .toggle-switch > .switch > .round').click({force:true})
       
        // cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
   
   
       //Check That Guest User can make retrospective Anonymously
         cy.log("check guest user can make retrospective anonymously")
         cy.get(BoardSetting).click({force:true})
         cy.get(':nth-child(11) > .toggle-switch > .switch > .round')
         .click({force:true})
         cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
         
        //Edit bOard details
         cy.log("check guest user can make retrospective anonymously")
         cy.get(BoardSetting).click({force:true})
         cy.get(':nth-child(12) > .img-desc').click({force:true})
       
         cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
  
})//ending it block

it('Clone Board', () => {

    cy.get(':nth-child(13) > .img-desc > p').click({force:true})
    cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 

});

it('Merge Board', () => {

    cy.get(':nth-child(14) > .img-desc').click({force:true})
    cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 

});

it('Convert to Template', () => {
   
    cy.get(':nth-child(15) > .img-desc > p').click({force:true})
    cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
});

it('Add New Health Check', () => {
          
        //add helath check:
          cy.get('.board-tab>:nth-child(3)',{timeout:3000}).click({force:true})
          cy.wait(2000)
          cy.get(':nth-child(2) > .hc-gen-box > .d-flex > :nth-child(2) > div > .hc-gen-box-btn',{timeout:3000}).click({froce:true})
          cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
        

    });
     
        // Create Custom Template
      
    
   
    })//ending describe block

describe('Guest User Polls not allowed action', () => {

    beforeEach(() => {
        cy.visit(GuestURLProduc)
        cy.get(guest_emailF).click().type('GuestUser')
        cy.get('.checkmark').click({force:true})
        cy.get(GuestSignBtn).click()
    });

    it('Create polls from given template', () => {
        
        cy.get('.sidebar-item',{timeout:3000}).eq(2).click({force:true})
        cy.get('.button-primary').eq(1).click({force:true})
        cy.get('.button-primary').click()
        //cy.get('.toast-message.failed',{timeout:3000}).should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
            
       });
        
       it('Create custom polls', () => {
       
        cy.get('.sidebar-item',{timeout:3000}).eq(2).click({force:true})
        cy.get('.button-primary').eq(0).click({force:true})
     
        cy.get('.toast-message.failed').should('contain.text' , "You don't have the permission to access this feature. Please contact your team's administrator for assistance") 
            
       });
});












