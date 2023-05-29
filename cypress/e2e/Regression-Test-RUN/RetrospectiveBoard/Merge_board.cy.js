it('Merge Board', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.reetro.app/');
  cy.get('[placeholder="Email"]').type('mahrukh.loxvo13+jack@gmail.com');
  cy.get('[placeholder="Password"]').type('test1234');
  cy.get('.login-signup-button').click();

  /* ==== Generated with Cypress Studio ==== */
  cy.get(':nth-child(3) > .team-box-button').click();
  cy.get(':nth-child(2) > .mh-board-icon-container > .mh-board-icon-grid > .mh-icon-img').click();
  cy.get('.share-btn').click();
  cy.get(':nth-child(14) > .img-desc > p').click();
  cy.get(':nth-child(2) > .input-text').clear();
  cy.get(':nth-child(2) > .input-text').type('merge');
  cy.get('.button-primary').click();
  cy.get('.toast-heading').should('be.visible');
  /* ==== End Cypress Studio ==== */
});