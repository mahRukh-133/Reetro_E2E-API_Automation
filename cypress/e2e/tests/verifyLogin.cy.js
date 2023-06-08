import { ProductionURL, producAdmin } from "../../../Helpers";
import loginPage from "../../Pageobjects/loginPage";
import crateBoard from "../../Pageobjects/Createboardpage";
describe('POM',()=>{

    beforeEach(function(){

        cy.visit(ProductionURL)


    })

    it('verify login successfull',()=>{
        const loginObj = new loginPage();
        const boardObj = new crateBoard();
        loginObj.enterEmail(producAdmin)
        loginObj.enterPassword('test1234')
        loginObj.clickSubmit();
        loginObj.selectCompany();
        boardObj.clickNewBoardBtn();
        boardObj.ClickCustomBoardBtn();

    })
})