import { ProductionURL, BaseUrl } from "../../../../Helpers";
import { email_field } from "../../../../Helpers";
import { Password_field } from "../../../../Helpers";
import { Login_Button } from "../../../../Helpers";
import { SelectCompany, producAdmin } from "../../../../Helpers";
import { NewBoard } from "../../../../Helpers"; 
import { CustomTempBoard,BoardTitle,BoardDescription, boardType } from "../../../../Helpers";
import { PublicBoardToggle,MaskCommentToggle,RUnanonmyoustoggle } from "../../../../Helpers";
import { SaveAsTemplateBoard,BoardTempName,CreateBoardBtn } from "../../../../Helpers";


describe('Create Board', () => {

   //This hook will redirect page to reetro.app before each test run
   beforeEach(() => {
      cy.visit(BaseUrl)
      cy.get(email_field).type('mahrukh.loxvo13@gmail.com ')
      cy.get(Password_field).type('test1234')
      cy.get(Login_Button).click()
      cy.get(SelectCompany).click()
   });

   it("Create Board", function () {

      //TO Select company/team in which you create board  
      cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
      cy.get('#react-select-2-option-0').click({ force: true }).wait(3000)

      // Clicking New Board Button
      cy.get(NewBoard).click({ force: true })
      cy.wait(2000)

      //Create Custom Board Template
      cy.get(CustomTempBoard).click()

      //Adding Board Title
      cy.get(BoardTitle).type('Test_Board')

      //Adding BoardDescription 
      cy.get(BoardDescription).type('This is dummy text')

      //Select option from drop-down  (Select Board Type)
      cy.get(boardType).type('Something{enter}{enter}');

      // Make the board public
      cy.get(PublicBoardToggle).click()

      //Make the comment Mask
      cy.get(MaskCommentToggle).click()

      //Run the board anonymous 
      cy.get(RUnanonmyoustoggle).click()

      //Save as Template Toggle Button
      cy.get(SaveAsTemplateBoard).click()


      // Enter Template Name
      cy.get(BoardTempName).type('Demo Board1')

      //Clicking on Create Board Button
      cy.get(CreateBoardBtn).click()


      //validate Board is created
      cy.get(".toast-message").should('contain.text', 'Board created successfully!').and('be.visible');



   }
   )

});

