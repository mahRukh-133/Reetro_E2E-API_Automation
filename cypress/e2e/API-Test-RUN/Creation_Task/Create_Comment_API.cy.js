import { Token } from "../../../../Helpers/elements/api";

describe("Comment API", () => {
    it("should create a comment successfully", () => {
      cy.request(
        {
        method: 'PUT',
          url: 'https://www.reetro.app/api/comment',
      
        headers:{   
           "accept":"application/json",
           "Authorization":Token   },

        body:
        {
        "companyId":"6343aae05465136fe0c01c59"
        ,"boardId":"646c65db9c7dccb3dc45d7de",
        "columnId":"column1","text":"test",
        "author":"mahrukh.loxvo13+jack@gmail.com",
        "position":-2,"userId":"6343b3115465136fe0c02f5d",
        "username":"mahrukh.loxvo13+jack@gmail.com"
    }
    }
      ).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success',true)
        expect(response.body.comment.isLegacy).to.be.false;
        expect(response.body.comment.author).to.eq('mahrukh.loxvo13+jack@gmail.com');

     });
    });
  });