import { producAdmin } from "../../../Accounts";
import {  ProductionURL } from "../../../Constant";
import { BoardDescription, BoardTempName, BoardTitle, boardType, CreateBoardBtn, CustomTempBoard, email_field, MaskCommentToggle, PublicBoardToggle, RUnanonmyoustoggle, SaveAsTemplateBoard} from "../../../Elements";
import { Password_field } from "../../../Elements";
import { Login_Button } from "../../../Elements";
import { SelectCompany } from "../../../Elements";
import { NewBoard } from "../../../Elements";

describe('Create Board', () => {

it("Create Board" , function(){

    cy.visit(ProductionURL)
    cy.get(email_field).type(producAdmin)
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
    cy.get('.mh-new-board-icon-grid').click()

    cy.get('.button-primary').eq(2).invoke('click')

// Add Board title
    cy.get('.text-field').click().type("BoardName") 
    
// Select Board type

//Select Team
cy.get(':nth-child(4) > .container > .reetro-select-container > .reetro-select__control > .reetro-select__value-container > .reetro-select__single-value').click();
cy.get('#react-select-5-option-1').click();
//Click on Create Button
cy.get('.button-export').click()

//Validate baord created successfully
cy.get('.toast-text').should('have.text','Board created successfully!')
})



it.only('check that all mandatory field',()=>{
    cy.visit(ProductionURL)
    cy.get(email_field).type(producAdmin)
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
    cy.get('.mh-new-board-icon-grid').click()

    cy.get('.button-primary').eq(2).invoke('click')

    // Clear board title
    cy.get('.text-field').click().clear()
    
    //Select Team
    cy.get(':nth-child(4) > .container > .reetro-select-container > .reetro-select__control > .reetro-select__value-container > .reetro-select__single-value').click();
    cy.get('#react-select-5-option-1').click();
    cy.get('.button-export').click();

    //an error message appeared
    cy.get('.toast-heading').should('be.visible');
    cy.get('.toast-text').should('have.text', 'Please enter the title for your board.');
 
})
})