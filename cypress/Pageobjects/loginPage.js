import { SelectCompany } from "../../Helpers";

class loginPage{

    elements = {

        emailInput :() => cy.get('[placeholder="Email"]'),
        passwordInput : () => cy.get('[placeholder="Password"]'),
        loginBtn : ()=> cy.get('.login-signup-button'),
        SlctCompany : ()=> cy.get(':nth-child(3) > .team-box-button')
   
    }
  // Define methods to interact with the elements
 //enter username
    enterEmail(email)
    {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }
    

    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickSubmit(){

        this.elements.loginBtn().click();
    }

    selectCompany(){

        this.elements.SlctCompany().click();
    }
    
}

export default loginPage;