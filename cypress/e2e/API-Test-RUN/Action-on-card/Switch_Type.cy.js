import { Token } from "../../../../Helpers/elements/api";
describe('Switch the card type',()=>{

    it('Check api of switch card type is working ',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/comment',

          headers:{
            "accept":"application/json",
            "Authorization":Token
            }, 


          body:{"_id":"64704d5a4f1fdaf4c17f3fbc",
          "userId":"6343b3115465136fe0c02f5d",
          "companyId":"6343aae05465136fe0c01c59",
          "bId":"646b417135105e84b961202f",
          "isAction":false,"status":"new",
          "responsible":"6343b3115465136fe0c02f5d",
          "username":"mahrukh.loxvo13+jack@gmail.com"}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)
            console.log('API Response:', response);

        })
    })//ending it block
})