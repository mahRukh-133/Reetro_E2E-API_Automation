import { Token } from "../../../../Helpers/elements/api";

describe('make me anonmyous',()=>{

    it('make me anonmyous',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/user',

          headers:{
            "accept":"application/json",
            "Authorization":Token        }, 

          body:{"_id":"6343b3115465136fe0c02f5d","isAnonymous":true,"username":"mahrukh.loxvo13+jack@gmail.com"}

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})