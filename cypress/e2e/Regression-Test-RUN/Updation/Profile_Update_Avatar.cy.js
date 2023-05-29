
import { ProductionURL } from "../../../Constant";
import { ProductionEmail, producAdmin } from "../../../Accounts";
import { SuccessMsg } from "../../../Elements";
describe('Update Profile', () => {

 
    it('Update Avatar', () => {

            cy.visit(ProductionURL)
            cy.get('[placeholder="Email"]').type(producAdmin)
            cy.get('[placeholder="Password"]').type('test1234')
            cy.get('.login-signup-button').click()
            cy.get(':nth-child(3) > .team-box-button').click()
          cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
          cy.get('#react-select-2-option-0').click({force:true}).wait(3000)
     
      const p = 'index.jpeg'
       // to show hide element
        cy.get('.user-dropdown-content', {timeout:6000}).invoke('show') 
        cy.get('.user-dropdown-content > :nth-child(1)',{timeout:6000}).click({force:true})
        
        cy.get('.profile-pic-and-update > :nth-child(2) > button', {timeout:6000}).click()
        //cy.wait(3000)
        cy.get('canvas').attachFile("image.jpg", { subjectType: 'drag-n-drop' });
      // cy.fixture('index.jpeg').then(fileContent => { cy.get('canvas',{timeout:6000}).attachFile({ fileContent, fileName: 'index.jpeg', mimeType: 'jpeg', encoding: 'utf8' }) })
        //cy.get('canvas').attachFile(p)
        cy.wait(5000)
       cy.get('button').contains('Upload').click({force:true})
       
       cy.get(SuccessMsg).should('contain.text' , 'Picture uploaded successfully!')
              

    });
})