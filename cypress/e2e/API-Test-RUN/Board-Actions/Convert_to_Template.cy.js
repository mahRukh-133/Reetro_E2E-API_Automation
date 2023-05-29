describe('Convert to template',()=>{

    it('Convert to template',()=>{

        cy.request(
            {
          method: 'POST',
          url: 'https://www.reetro.app/api/board/save-template',

          headers:{
            "accept":"application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haHJ1a2gubG94dm8xMytqYWNrQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc1NjQ1MiwiZXhwIjoxNjg3MzQ4NDUyfQ.rEDMV0L9Zg2C_lUfn6Wc8QwhcCwkY8Y6c9N75q6SasY"
          }, 

          body:{"companyId":"6343aae05465136fe0c01c59","projectId":"64071ffdaba228540fb4207a",
          "title":"convert template test board api","createdBy":"6343b3115465136fe0c02f5d",
          "column1":{"title":"👌 Went well","isActive":true,"color":"white",
          "comments":[{"_id":"647060244f1fdaf4c17f98a0","isLegacy":false,
          "boardId":"647060244f1fdaf4c17f989d","columnId":"column1",
          "text":"dummy","author":"mahrukh.loxvo13+jack@gmail.com",
          "mergedAuthors":[],"position":0,"isAction":false,
          "isPoll":false,"pollId":null,"isGif":false,
          "gif":null,"kudosId":null,"canvas":null,"multiVotes":[],
          "upVotes":[],"downVotes":[],"voters":[],"remarks":[],
          "color":"white","status":"new","responsible":"6343b3115465136fe0c02f5d",
          "isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d",
          "updatedBy":"6343b3115465136fe0c02f5d",
          "createdAt":"2023-05-26T06:10:34.004Z",
          "updatedAt":"2023-05-26T06:16:49.758Z",
          "__v":0},{"_id":"647060244f1fdaf4c17f98a4",
          "isLegacy":false,"boardId":"647060244f1fdaf4c17f989d",
          "columnId":"column1","text":"test","author":"mahrukh.loxvo13+jack@gmail.com",
          "mergedAuthors":[],"position":2,"isAction":false,"isPoll":false,"pollId":null,
          "isGif":false,"gif":null,"kudosId":null,"canvas":null,"multiVotes":[],"upVotes":[],
          "downVotes":[],"voters":[],"remarks":[],"color":"white","status":"new",
          "responsible":"not-assigned","isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d",
          "updatedBy":"6343b3115465136fe0c02f5d","createdAt":"2023-05-26T06:19:48.525Z",
          "updatedAt":"2023-05-26T06:19:48.525Z","__v":0},{"_id":"647060244f1fdaf4c17f98a6",
          "isLegacy":false,"boardId":"647060244f1fdaf4c17f989d","columnId":"column1",
          "text":"1211","author":"mahrukh.loxvo13+jack@gmail.com","mergedAuthors":[],
          "position":3,"isAction":false,"isPoll":false,"pollId":null,"isGif":false,
          "gif":null,"kudosId":null,"canvas":null,"multiVotes":[],
          "upVotes":[],"downVotes":[],"voters":[],"remarks":[],
          "color":"white","status":"new","responsible":"not-assigned",
          "isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d",
          "updatedBy":"6343b3115465136fe0c02f5d",
          "createdAt":"2023-05-26T06:19:49.945Z",
          "updatedAt":"2023-05-26T06:19:49.945Z","__v":0}
          ,{"_id":"647060244f1fdaf4c17f98a8","isLegacy":false,
          "boardId":"647060244f1fdaf4c17f989d","columnId":"column1",
          "text":"whdd","author":"mahrukh.loxvo13+jack@gmail.com","mergedAuthors":[],"position":4,"isAction":false,"isPoll":false,"pollId":null,"isGif":false,"gif":null,"kudosId":null,"canvas":null,"multiVotes":[],"upVotes":[],"downVotes":[],"voters":[],"remarks":[],"color":"white","status":"new","responsible":"not-assigned","isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d","updatedBy":"6343b3115465136fe0c02f5d","createdAt":"2023-05-26T06:19:51.621Z","updatedAt":"2023-05-26T06:19:51.621Z","__v":0},{"_id":"647060244f1fdaf4c17f98aa","isLegacy":false,"boardId":"647060244f1fdaf4c17f989d","columnId":"column1","text":"vxhxvcdc","author":"mahrukh.loxvo13+jack@gmail.com","mergedAuthors":[],"position":5,"isAction":false,"isPoll":false,"pollId":null,"isGif":false,"gif":null,"kudosId":null,"canvas":null,"multiVotes":[],"upVotes":[],"downVotes":[],"voters":[],"remarks":[],"color":"white","status":"new","responsible":"not-assigned","isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d","updatedBy":"6343b3115465136fe0c02f5d","createdAt":"2023-05-26T06:19:56.703Z","updatedAt":"2023-05-26T06:19:56.703Z","__v":0},{"_id":"647060244f1fdaf4c17f98ac","isLegacy":false,"boardId":"647060244f1fdaf4c17f989d","columnId":"column1","text":"dfds","author":"mahrukh.loxvo13+jack@gmail.com","mergedAuthors":[],"position":6,"isAction":false,"isPoll":false,"pollId":null,"isGif":false,"gif":null,"kudosId":null,"canvas":null,"multiVotes":[],"upVotes":[],"downVotes":[],"voters":[],"remarks":[],"color":"white","status":"new","responsible":"not-assigned","isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d","updatedBy":"6343b3115465136fe0c02f5d","createdAt":"2023-05-26T06:19:57.860Z","updatedAt":"2023-05-26T06:19:57.860Z","__v":0}]},"column2":{"title":"📈 To improve","isActive":true,"color":"white","comments":[{"_id":"647060244f1fdaf4c17f98a2","isLegacy":false,"boardId":"647060244f1fdaf4c17f989d","columnId":"column2","text":"comment","author":"mahrukh.loxvo13+jack@gmail.com","mergedAuthors":[],"position":1,"isAction":false,"isPoll":false,"pollId":null,"isGif":false,"gif":null,"kudosId":null,"canvas":null,"multiVotes":[],"upVotes":[],"downVotes":[],"voters":[],"remarks":[],"color":"white","status":"new","responsible":"not-assigned","isBookmarked":false,"createdBy":"6343b3115465136fe0c02f5d","updatedBy":"6343b3115465136fe0c02f5d","createdAt":"2023-05-26T06:10:38.744Z",
          "updatedAt":"2023-05-26T06:10:38.744Z","__v":0}]},"column3":{"title":"📍 Action items","isActive":true,"color":"white","comments":[]},"column4":{"title":"","isActive":false,"color":"white","comments":[]},"column5":{"title":"","isActive":false,"color":"white","comments":[]},"column6":{"title":"","isActive":false,"color":"white",
          "comments":[]},"username":"mahrukh.loxvo13+jack@gmail.com"}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true)


        })
    })//ending it block
})