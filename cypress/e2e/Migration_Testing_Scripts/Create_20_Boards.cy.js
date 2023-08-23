import { DevEnvURL } from "../../../Environments";
import { email_field, Password_field, Login_Button } from "../../../Helpers";

// Function for Create Random Board Name
function generateRandomBoardName() {
  const adjectives = ["My", "Our", "Team", "Agile", "Awesome", "Great"];
  const nouns = ["Board", "Retro", "Review", "Meeting", "Session", "Wrap-up"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun} Retrospective`;
}

// Function to generate a unique random comment
function generateUniqueComment(index) {
  return `Unique Comment ${index}`;
}

// Function to generate random comments
function generateRandomComment() {
  const comments = [
    "We did an excellent job collaborating as a team.",
    "Communication could have been better during this sprint.",
    "I appreciate everyone's effort and dedication.",
    "We need to address the issues with our testing process.",
    "The design work on the new feature was outstanding.",
    "Let's focus on improving our time management for the next sprint.",
    "I'd like to see more automated testing in the future.",
    "Our team's flexibility in adapting to changes was impressive.",
    // Add more comments as needed
  ];

  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}

beforeEach(() => {
  cy.visit(DevEnvURL);
  cy.get(email_field).type('testflow832+k@gmail.com');
  cy.get(Password_field).type('test1234');
  cy.get(Login_Button).click();
});

describe("Create 20 Boards in Each Team", () => {
  it(" Create 20 Boards", () => {
    // Add loop for creating boards 20 times
    for (let i = 0; i < 20; i++) {
      const randomBoardName = generateRandomBoardName();
     // const uniqueComment = generateUniqueComment(i + 1);
      //const randomComment = generateRandomComment();
      cy.get('.mh-new-board-icon-grid > img').click();
      cy.get('.create-new-template-box').click();
      cy.get('[type="text"]').click().type(randomBoardName);
      cy.get('.create-board-btn').click();
      cy.wait(5000);
      cy.get('.sidebar-item', { timeout: 5000 }).eq(0).click();
    }
    
  });
});
