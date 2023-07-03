import { Token } from "../../../../Helpers/elements/api";

describe('Duplicate Card', ()=>{

    it.skip('Check the api working of Duplicate card',()=>{

        cy.request(
            {
          method: 'PUT',
          url: 'https://www.reetro.app/api/comment',

          headers:{
            "accept":"application/json",
            "Authorization":Token }, 
 

          body:{"_id":"646da6118c9d76bd67bd9bea",
          "isLegacy":false,"boardId":"646d9ec58c9d76bd67bd9036",
          "columnId":"column1","text":"test32a",
          "author":"mahrukh.loxvo13+jack@gmail.com",
          "mergedAuthors":[],"position":-1,"isAction":false,"isPoll":false,
          "pollId":null,"isGif":false,"gif":null,"kudosId":null,"canvas":null,
          "multiVotes":[],"upVotes":[],"downVotes":[],"voters":[],"remarks":[],
          "color":"white","status":"new","responsible":"not-assigned","isBookmarked":false,
          "createdBy":"6343b3115465136fe0c02f5d","updatedBy":"6343b3115465136fe0c02f5d",
          "createdAt":"2023-05-24T05:52:17.913Z","updatedAt":"2023-05-24T05:59:58.739Z",
          "__v":0,"userId":"6343b3115465136fe0c02f5d",
          "companyId":"6343aae05465136fe0c01c59","username":"mahrukh.loxvo13+jack@gmail.com"}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success',true)
           
    })
})

})