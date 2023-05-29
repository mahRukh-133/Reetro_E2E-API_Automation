describe("Comment API", () => {
    it("should create a comment successfully", () => {
      cy.request(
        {
        method: 'PUT',
          url: 'https://www.reetro.app/api/comment',
      
        headers:{   
           "accept":"application/json",
           "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
        },

        body:
        {"companyId":"6343aae05465136fe0c01c59",
        "boardId":"646c65db9c7dccb3dc45d7de",
        "columnId":"column3","text":"t",
        "author":"mahrukh.loxvo13+jack@gmail.com",
        "position":-1,"userId":"6343b3115465136fe0c02f5d",
        "kudosId":"646c855cde330ace31200107",
        "username":"mahrukh.loxvo13+jack@gmail.com"}
    }
      ).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success',true)
       expect(response.body.comment.kudosId).to.eq('646c855cde330ace31200107')
        

     });
    });
  });