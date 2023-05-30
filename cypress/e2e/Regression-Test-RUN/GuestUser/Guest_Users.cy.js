import { GuestURLProduc } from "../../../../Helpers";
describe('Guest', () => {
      
    beforeEach(() => {
          cy.visit(GuestURLProduc)
          cy.get('.sign-form-field').type('Guest_User')
          cy.get('.checkmark').click()
          cy.get('.field-box-signin > :nth-child(3)').click({froce:true})
        
    });

    it('Add Comment', () => {
          
          cy.get('.ticket-comment', {timeout:4000}).eq(0).click({force:true})
          cy.get(".ticket-insert-text").first().type("Lorem Ipsum is simply dummy text of the printing and typesetting industry.{enter}")

    })

    it('Add Action Items to other users', () => {
          
          cy.get(".ticket-action-item").first().click()
          cy.wait(2000)
          cy.get(".ticket-user-pic.sb-avatar__image").eq(0).click({force:true})
          cy.get('.ticket-text > .d-flex > :nth-child(1) > .sb-avatar > .ticket-user-pic').click()
          cy.get('.input').click().type('a')
          cy.get(':nth-child(16) > .d-flex').click()
          cy.get(".input-enter-comment").first().type("test{enter}")

  })

    it('Add Action Items to me', () => {
          
          cy.get(".ticket-action-item").first().click()
          cy.wait(2000)
          cy.get(".ticket-user-pic.sb-avatar__image").eq(0).click({force:true})
          cy.get('.ticket-text > .d-flex > :nth-child(1) > .sb-avatar > .ticket-user-pic').click()
          cy.get(".to-me").click()
          cy.get(".input-enter-comment").first().type("test{enter}")

})

    it('Add Kudos', () => {
          
    //Add Kudos
          cy.get(".ticket-ai-party").eq(0).click()
          cy.wait(3000)
          cy.get(".ticket-user-pic .sb-avatar__image").eq(1).click({force:true})
          cy.get(".input").click().type("test")
          //cy.get(".p-name").click({force:true})
          cy.get(".div-and-email").eq(0).click({force:true})
          cy.get(".input-enter-comment").first().type("test{enter}")

})

    it('Add Polls Card from Template', () => {
          
 //Add Polls Card from template
          cy.get("i.fas.fa-poll.poll").eq(0).click({force:true})
          cy.wait(5000)
          cy.get(".col-xl-3.col-lg-3.col-md-6.col-sm-12").eq(0).click({force:true})
          cy.get('.button-primary').eq(0).invoke('click')
          cy.get('.toast-text').should('have.text', "You don't have the permission to access this feature. Please contact your team's administrator for assistance.")

})

    it('Make me anonmyous', () => {
       
          cy.get('.share-btn').click()
          cy.get(':nth-child(10) > .toggle-switch > .switch > .round').click({force:true})
          cy.get('.toast-message.success').should('contain.text' , "User updated successfully!")
  });
  
  });
  
  describe('Give feedback to Health-Check', () => {
    it.skip('Health Check Feedback', () => {
          cy.visit(GuestURLProduc)
          cy.get('.sign-form-field').type('guest health-check user')
          cy.get('.checkmark').click()
          cy.get('.field-box-signin > :nth-child(3)').click({force:true})
          cy.get('.board-tab > :nth-child(3)').click({froce:true})    
          cy.get('.rate-box-2').click({force:true})
          cy.get('.button-primary').click({force:true}) 
          cy.get('.rate-box-3').click({froce:true})
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-4').click({force:true})
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-3').click({froce:true})
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-2').click()
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-4').click({force:true})
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-2').click()
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-4').click({force:true})
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-3').click({froce:true})
          cy.get('.button-primary').click({force:true})
          cy.get('.rate-box-4').click({force:true})
          cy.get('.button-primary').click({force:true})
    });
});

//Polls Action of Guest USers
describe('Polls Actions', () => {
     
      
    it.skip('Add feedback to polls', () => {
     cy.visit(GuestURLProduc)
     cy.get('.sign-form-field').type('guest health-check user')
     cy.get('.checkmark').click()
     cy.get('.field-box-signin > :nth-child(3)').click({force:true})
     cy.wait(2000)
    // cy.get('.left-menu-notifs').click({force:true})
     //cy.get('.squeeze >:nth-child(1)>:nth-child(1)').eq(0).click()
     //cy.get('.toast-message.success').should('contain.text' ,"Your answer submitted successfully!")

    });
});


