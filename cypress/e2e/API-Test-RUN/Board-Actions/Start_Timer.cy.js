import { Token } from "../../../../Helpers/elements/api";

describe('Start Timer',()=>{

    it('Start Timer',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/board',

          headers:{
            "accept":"application/json",
            "Authorization":Token   }, 

          body:{"_id":"646b417135105e84b961202f",
          "companyId":"6343aae05465136fe0c01c59",
          "projectId":"64071ffdaba228540fb4207a",
          //for stop timer replace true with false and duration should be 0
          "timerInProgress":true,"duration":20,
          "updatedBy":"6343b3115465136fe0c02f5d",
          "username":"mahrukh.loxvo13+jack@gmail.com"}

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})