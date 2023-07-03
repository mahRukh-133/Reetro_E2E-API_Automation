import { Token } from "../../../../Helpers/elements/api";

describe("Change the status of action items", () => {
    it("should change the status of action items successfully", () => {
      cy.request(
        {
        method: 'POST',
          url: 'https://www.reetro.app/api/comment',
      
        headers:{   
           "accept":"application/json",
           "Authorization":Token },

        body:
        {"_id":"646c692211242c9e03560789","userId":"6343b3115465136fe0c02f5d",
        "companyId":"6343aae05465136fe0c01c59","bId":"646c65db9c7dccb3dc45d7de",
        "status":"rejected","username":"mahrukh.loxvo13+jack@gmail.com"}
    }
      ).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success',true)
        expect(response.body.updatedValues.status).to.eq('rejected');


     });
    });
  });