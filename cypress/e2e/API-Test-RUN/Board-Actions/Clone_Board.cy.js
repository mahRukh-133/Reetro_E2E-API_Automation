import { Token } from "../../../../Helpers/elements/api";

describe('Clone Board',()=>{

    it('Clone board',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/board/clone',

          headers:{
            "accept":"application/json",
            "Authorization":Token}, 


          body:{title: "merge new board Copy", companyId: "6343aae05465136fe0c01c59",boardId:"64883feb18685c67b9c1cf1e",companyId: "6343aae05465136fe0c01c59",createdBy:"6343b3115465136fe0c02f5d", projectId: "64071ffdaba228540fb4207a" ,title:"merge new board Copy",
          username :"mahrukh.loxvo13+jack@gmail.com"}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})