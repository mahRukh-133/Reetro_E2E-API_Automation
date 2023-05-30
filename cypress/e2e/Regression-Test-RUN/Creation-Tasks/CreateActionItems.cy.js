import { BaseUrl } from "../../../../Helpers"
import { email_field } from "../../../../Helpers"
import { Password_field } from "../../../../Helpers"
import { stagingadmin } from "../../../../Helpers"
import { Login_Button } from "../../../../Helpers"
import { SelectCompany } from "../../../../Helpers"
import { ProductionURL } from "../../../../Helpers"
import { SuccessMsg } from "../../../../Helpers"

describe('Action Tracker', () => { 
  it('Inline ActionItem Check for Free Team', () => {
    
    cy.log("Free team super admin create inline action")
    cy.visit(BaseUrl)
    cy.get(email_field).type(stagingadmin)
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
    cy.get('.sidebar-item').eq(5).click({force:true})   
  // add Title for action items
    cy.get('.at-field').click().type("test action item")
  // Validate Popup should appear
    cy.get('.info > span > .toast-heading').should('contain.text', 'This feature is not available in Free plan. Please upgrade to any plan.').and('be.visible');

  })//ending it
  
  it('Inline action items for paid team',()=>{
    cy.log("paid team admin create action iline")
    cy.visit(ProductionURL)
    cy.get(email_field).type(producAdmin)
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
  //TO Select paid company/team in which you create board  
    cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
    cy.get('#react-select-2-option-0',{timeout:3000}).click({force:true})

    cy.get('.sidebar-item').eq(5).click({force:true})   
  // add Title for action items
    cy.get('.at-field').click().type("test action item")
  // add/select Columns
    cy.get(':nth-child(1) > .row > .col-xl-4 > .container > .reetro-select-container > .reetro-select__control').click()
  //Click on Create Button
    cy.get('.button-primary').click()
  // To validate action item addedd successfully
    cy.get(SuccessMsg).should('contain.text', 'Action item created successfully').and('be.visible')
 
})//ending it block

it.skip('Change the status of action Item' , () =>{
  cy.visit(ProductionURL)
  cy.get(email_field).type(producAdmin)
  cy.get(Password_field).type('test1234')
  cy.get(Login_Button).click()
  cy.get(SelectCompany).click()
  cy.get('.sidebar-item').eq(5).click({force:true})

  //Change the status of action items.
  // cy.get('.mb-3.ml-2.mr-2').eq(1).trigger('mousedown', { which: 1 })
  ///cy.get('.mb-3 .ml-2 .mr-2').trigger('mousemove').trigger('mouseup', { force: true })

  // cy.get('.container').click({force:true})  // Click on the dropdown to open it
  // cy.contains('In Progress')  // Locate the option you want to select
  //.click()  // Click on the option to select it
  //cy.get('span').contains('css-7pg0cj-a11yText').click(); // Locate and click the dropdown span element
  //cy.get('span').contains('Option 1').click(); // Locate and click the option span element

  it("change", ()=>{

    cy.visit(ProductionURL)
    cy.get(email_field).type(producAdmin)
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
    cy.get('.sidebar-item').eq(5).click({force:true}) 

  })


  /* ==== Generated with Cypress Studio ==== */
  cy.get('#react-select-12-option-1').click();
  /* ==== End Cypress Studio ==== */
}


)

})//ending describe block