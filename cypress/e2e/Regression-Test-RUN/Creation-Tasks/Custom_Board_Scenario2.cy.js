import { BoardDescription, MaskCommentToggle, ProductionURL, PublicBoardToggle, RUnanonmyoustoggle, SaveAsTemplateBoard, producAdmin } from "../../../../Helpers"
import { email_field,Password_field,Login_Button,SelectCompany , BoardTitle,boardType} from "../../../../Helpers"
describe('Create Custom Board',()=>{
    
    beforeEach(() => {
    cy.visit(ProductionURL)
    cy.get(email_field).type(producAdmin)
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
    cy.wait(3000)
    cy.get('.board-grid > .mh-board-icon-container').click({force:true})
    cy.get('.create-new-template-box').click({force:true})
    })

it('should display the Custom Create page when clicked',()=>{

    //Click on New Board Button
    //cy.get('.board-grid > .mh-board-icon-container').click({force:true})

    //Click on Create Custom Template button
    //cy.get('.create-new-template-box').click({force:true})

    cy.url().should('include', '/create-board')
    
})

it('should validate UI elements of the Custom Create board page', () => {
   
    cy.get(BoardTitle).should('exist')
    cy.get('.cf-textarea').should('be.visible');
    cy.get('.reetro-select__single-value').should('be.visible');
    cy.get(':nth-child(7) > .cf-text-field').should('be.visible');
    cy.get(':nth-child(8) > .cf-text-field').should('be.visible');
    cy.get(':nth-child(9) > .cf-text-field').should('be.visible');
    cy.get(':nth-child(12) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    cy.get(':nth-child(13) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    cy.get(':nth-child(14) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    cy.get('.vote-counter > input').should('be.visible');
    cy.get(':nth-child(16) > .switch-option-desc > p').should('be.visible');
    cy.get('.create-board-btn').should('be.visible');
    cy.get('.btn-board-cancel').should('be.visible');
})

it('should enter board name when clicked', () => {
    cy.get(BoardTitle).type('Test Board')
    cy.get(BoardTitle).should('have.value', 'Test Board')
  })

it('should enter board description when clicked', () => {
    cy.get(BoardDescription).type('This is a test board')
    cy.get(BoardDescription).should('have.value', 'This is a test board')
  })   
  
it('should select board type No Phases', ()=>{
    cy.get('.reetro-select__single-value').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('.reetro-select__single-value').should('have.text', 'No Phases');
    
})  

it('should select board type Phases', ()=>{
    cy.get('.reetro-select__single-value').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('.reetro-select__single-value').should('have.text', 'Phases (Reflect, Group, Vote, Discuss)');
})  


it('should add new column when clicked', () => {
    cy.get('.cf-text-fa-text').click();
    cy.get(':nth-child(10) > .cf-text-field').clear('t');
    cy.get(':nth-child(10) > .cf-text-field').type('test');
    cy.get('.create-project-form > :nth-child(10)').click();
    cy.get(':nth-child(10) > .cf-text-field').should('have.value', 'test');
})

it('should redirect to template page when clicked', () => {
    cy.get('.cf-text-fa-text-link').click()
    cy.url().should('include', '/select-template')
  })

it('should make board public when clicked', () => {
    cy.get(PublicBoardToggle).click()
    cy.get(':nth-child(12) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
    cy.get(':nth-child(12) > .cf-switch > .toggle-switch > .switch > .slider').should('have.class', 'round');
})

it('should mask comments when clicked', () => {
    cy.get(MaskCommentToggle).click()
    cy.get(':nth-child(13) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
})

it('should run anonymous retrospective when clicked', () => {
    cy.get(RUnanonmyoustoggle).click()
    cy.get(':nth-child(14) > .cf-switch > .toggle-switch > .switch > .slider').should('be.visible');
  })

it('should save board as template when clicked', () => {
      cy.get(SaveAsTemplateBoard).click()
      cy.get('.mt-2').click()
      cy.get('.mt-2').clear();
      cy.get('.mt-2').type('test board tenplate');
      cy.get('.mt-2').should('have.value', 'test board tenplate');
      cy.get('.create-board-btn').click();
  })


it.only('should redirect to template page when cancel button is clicked', () => {
    cy.get('.btn-board-cancel').click()
    cy.url().should('include', '/select-template')
  })

































})