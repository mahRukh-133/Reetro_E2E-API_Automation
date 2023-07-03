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
        boardObj.clickNewBoardBtn();
        boardObj.ClickCustomBoardBtn();
        

    
    });
    it('should validate UI elements of the Custom Create board page', () => {
        boardObj.BoardTitle('test')
        boardObj.BoardDescrp('heelo descriptin')
        boardObj.BoardType()
        boardObj.PublicBoard()
        boardObj.MaskComment()

        /* ==== Generated with Cypress Studio ==== */
        /* ==== End Cypress Studio ==== */
    })
})

