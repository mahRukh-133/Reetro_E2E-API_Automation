// Don't do this

import { Login_Button, Password_field, ProductionURL, email_field, passwrdstag } from "../../Helpers";

describe("Admin login", () => {
    let userDetails;
  
    beforeEach(() => {
      cy.fixture("credentials/admin").then(user => {
        userDetails = user;
      });
    });
  
    it("should be able to login", () => {
      cy.visit(userDetails.url)
      cy.get(email_field).type(userDetails.email);
      cy.get(Password_field).type(userDetails.password);
      cy.get(Login_Button).click();
    });
  });
  