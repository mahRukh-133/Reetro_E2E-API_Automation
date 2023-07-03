
class crateBoard{

    elements = {

        NewBoardBtn : () => cy.get('.board-grid > .mh-board-icon-container'),
        CustomBoardBTN : () => cy.get('.create-new-template-box'),
        BoardName : () => cy.get('[type="text"]'),
        BoardDesciption : () => cy.get('.cf-textarea'),
        BoardType : () => cy.get('.reetro-select__single-value'),
        SelectBoardType : () => cy.get('#react-select-4-option-0'),
        PublicTogle : () => cy.get(':nth-child(12) > .cf-switch > .toggle-switch > .switch > .slider'),
        MaskCommentTogle : ()=> cy.get(':nth-child(13) > .cf-switch > .toggle-switch > .switch > .slider')

    }

    clickNewBoardBtn(){

        this.elements.NewBoardBtn().click();

    } 

    ClickCustomBoardBtn(){

        this.elements.CustomBoardBTN().click()
    }

    BoardTitle(title){

        this.elements.BoardName().click().type(title).should('be.visible')
    }

    BoardDescrp(description){

        this.elements.BoardDesciption().click().type(description).should('be.visible')
    }


    BoardType(){
        this.elements.BoardType().should('be.visible')
    }

    SelectBoardType(){

        this.elements.SelectBoardType().click()
    }

PublicBoard(){
        this.elements.PublicTogle().click()  
}

MaskComment(){
         this.elements.MaskCommentTogle().click()
}

}

export default crateBoard;