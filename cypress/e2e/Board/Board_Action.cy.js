import { ProductionURL,producAdmin } from "../../../Helpers";
import crateBoard from "../../Pageobjects/Createboardpage";
import loginPage from "../../Pageobjects/loginPage";
describe ('Create Custom Board',()=>{
    const loginObj = new loginPage();
    const boardObj = new crateBoard();

    beforeEach(() => {
        cy.visit(ProductionURL)
        loginObj.enterEmail(producAdmin)
        loginObj.enterPassword('test1234')
        loginObj.clickSubmit();
        loginObj.selectCompany();
        

    
    });
    it('should validate UI elements of the Custom Create board page', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .container > .reetro-select-container > .reetro-select__control > .reetro-select__value-container > .reetro-select__single-value').click();
        cy.get('#react-select-2-option-0').click();
        cy.get(':nth-child(1) > .container > .reetro-select-container > .reetro-select__control > .reetro-select__value-container > .reetro-select__single-value').should('have.text', 'Automation_Test_Run');
        /* ==== End Cypress Studio ==== */
    })
})



