import { BaseUrl, BoardDescription, BoardTempName, BoardTitle, CreateBoardBtn, CustomTempBoard, Login_Button, MaskCommentToggle, NewBoard, Password_field, PublicBoardToggle, RUnanonmyoustoggle, SaveAsTemplateBoard, SelectCompany, boardType, email_field } from "../../../../Helpers";


describe('Create Board', () => {

  //This hook will redirect page to reetro.app before each test run
  beforeEach(() => {
    cy.visit(BaseUrl)
    cy.get(email_field).type('mahrukh.loxvo13@gmail.com ')
    cy.get(Password_field).type('test1234')
    cy.get(Login_Button).click()
    cy.get(SelectCompany).click()
});

   it("Create Board" , function()
   {

      //TO Select company/team in which you create board  
      cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
      cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

      // Clicking New Board Button
      cy.get(NewBoard).click({force:true})
      cy.wait(2000)

      //Create Custom Board Template
      cy.get(CustomTempBoard).click()

      //verify that user redirect to create board page

      cy.url().should('include','/create-board')

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
     
   it('user fill all mandatory field if not an error appeared',()=>{
    //TO Select company/team in which you create board  
    cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
    cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

    // Clicking New Board Button
    cy.get(NewBoard).click({force:true})
    cy.wait(2000)

    //Create Custom Board Template
    cy.get(CustomTempBoard).click()

    //verify that user redirect to create board page
    cy.url().should('include','/create-board')

    //Check that Board should not be created without filling required fields

    //left blank empty title of page and fill form

    //Adding BoardDescription 
    cy.get(BoardDescription).type('This is dummy text')

    //Select option from drop-down  (Select Board Type)
    cy.get(boardType).type('Something{enter}{enter}');

    // Make the board public
    cy.get(PublicBoardToggle).click()

    //Click on create button
    cy.get(CreateBoardBtn).click()

    //There should be error appeared
    cy.get('.toast-heading').should('be.visible');
    cy.get('.toast-text').should('have.text', 'Please enter the title for your board.');
   
   })

   it('Check that all toggle button enabaled or working correctly',()=>{
   //TO Select company/team in which you create board  
    cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
    cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

    // Clicking New Board Button
    cy.get(NewBoard).click({force:true})
    cy.wait(2000)

    //Create Custom Board Template
    cy.get(CustomTempBoard).click()

    //verify that user redirect to create board page
    cy.url().should('include','/create-board')

    //check public board toggle enabled
    cy.get(PublicBoardToggle).click().should('be.visible')

    //Make the comment Mask
    cy.get(MaskCommentToggle).click().should('be.visible')

    //Run the board anonymous 
    cy.get(RUnanonmyoustoggle).click().should('be.visible')


    //Save as Template Toggle Button
    cy.get(SaveAsTemplateBoard).click().should('be.visible')

   })

   it.only('USer click on Cancel button then user redirected create board page',()=>{

    //TO Select company/team in which you create board  
    cy.get('.flex > :nth-child(1)').should('be.visible').click().wait(3000)
    cy.get('#react-select-2-option-0').click({force:true}).wait(3000)

    // Clicking New Board Button
    cy.get(NewBoard).click({force:true})
    cy.wait(2000)

    //Create Custom Board Template
    cy.get(CustomTempBoard).click()

    //Click on cancel button
    cy.get('.btn-board-cancel').click()

    //User redirect to select template page
    cy.url().should('include','/select-template')

   })
  });
  
   