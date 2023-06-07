import { email_field,Password_field,Login_Button,SelectCompany,producAdmin } from "../../../../Helpers"
describe('Create Board from Template', () => {
    beforeEach(() => {
      cy.visit('https://www.reetro.app/')
      cy.get(email_field).type(producAdmin)
      cy.get(Password_field).type('test1234')
      cy.get(Login_Button).click()
      cy.get(SelectCompany).click()
      cy.wait(3000)
      
    cy.get('.board-grid > .mh-board-icon-container').click({force:true})
    })
  
    it.only('should display Create a New Board page when Select Template is clicked', () => {
      /* ==== Generated with Cypress Studio ==== */
    //s  cy.get('.button-primary').eq(2).invoke('click')

      cy.get(':nth-child(69) > .card-poll > .button-primary').invoke('click')
      cy.get('.text-field').should('be.visible');
      cy.get('.text-field').click();
      cy.get('.text-field').click();
      cy.get('.text-field').clear('t');
      cy.get('.text-field').type('test baord');
    
    
    })
  
    it('should have all required UI elements on Create a New Board page', () => {
      cy.contains('Select Template').click()
      cy.contains('Create a New Board')
      cy.get('[data-cy=board-name]').should('exist')
      cy.get('[data-cy=phases-dropdown]').should('exist')
      cy.get('[data-cy=team-dropdown]').should('exist')
      cy.get('[data-cy=create-button]').should('exist')
      cy.get('[data-cy=cancel-button]').should('exist')
    })
  
    it('should allow user to enter/edit board name', () => {
      cy.contains('Select Template').click()
      cy.contains('Create a New Board')
      cy.get('[data-cy=board-name]').type('Test Board')
      cy.get('[data-cy=board-name]').should('have.value', 'Test Board')
    })
  
    it('should allow user to select phases', () => {
      cy.contains('Select Template').click()
      cy.contains('Create a New Board')
      cy.get('[data-cy=phases-dropdown]').click()
      cy.get('[data-cy=phases-dropdown]').contains('Phase 1').click()
      cy.get('[data-cy=phases-dropdown]').should('have.value', 'Phase 1')
    })
  
    it('should allow user to select team', () => {
      cy.contains('Select Template').click()
      cy.contains('Create a New Board')
      cy.get('[data-cy=team-dropdown]').click()
      cy.get('[data-cy=team-dropdown]').contains('Team 1').click()
      cy.get('[data-cy=team-dropdown]').should('have.value', 'Team 1')
    })
  
    it('should create board when Create button is clicked', () => {
      cy.contains('Select Template').click()
      cy.contains('Create a New Board')
      cy.get('[data-cy=board-name]').type('Test Board')
      cy.get('[data-cy=phases-dropdown]').click()
      cy.get('[data-cy=phases-dropdown]').contains('Phase 1').click()
      cy.get('[data-cy=team-dropdown]').click()
      cy.get('[data-cy=team-dropdown]').contains('Team 1').click()
      cy.get('[data-cy=create-button]').click()
      cy.contains('Test Board')
    })
  
    it('should redirect to board template page when Cancel button is clicked', () => {
      cy.contains('Select Template').click()
      cy.contains('Create a New Board')
      cy.get('[data-cy=cancel-button]').click()
      cy.contains('Select Template')
    })
  })
  
  