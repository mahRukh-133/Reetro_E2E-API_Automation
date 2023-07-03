import { Token } from "../../../../Helpers/elements/api";

describe('Merge  Board',()=>{

    it('Merge board',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/board/merge',

          headers:{
            "accept":"application/json",
            "Authorization":Token        }, 

          body:{"createdBy":"6343b3115465136fe0c02f5d","companyId":"6343aae05465136fe0c01c59","projectId":"64071ffdaba228540fb4207a","title":"merge","boardIds":["646b417135105e84b961202f"],"columns":[{"isActive":true,"title":"👌 Went well","color":"white","columnIds":["646b417135105e84b961202f-column1"]},{"isActive":true,"title":"📈 To improve","color":"white","columnIds":["646b417135105e84b961202f-column2"]},{"isActive":true,"title":"📍 Action items","color":"white","columnIds":["646b417135105e84b961202f-column3"]},{"isActive":false,"title":"","color":"white","columnIds":[]},{"isActive":false,"title":"","color":"white","columnIds":[]},{"isActive":false,"title":"","color":"white","columnIds":[]}],"isLocked":true,"username":"mahrukh.loxvo13+jack@gmail.com"}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})